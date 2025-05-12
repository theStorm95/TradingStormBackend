import { PolygonDataProvider } from "../client";
import { restClient } from "@polygon.io/client-js";
import { DataProvider } from "../interface/DataProvider";
import { Logger } from "pino";
import { createScopedLogger } from "./loggerFactory";

export class CoreServices {
  private readonly rootDataProvider: DataProvider;
  private readonly rootLogger: Logger;

  constructor() {
    const polygonClient = restClient(process.env.POLYGON_API_KEY || "");
    this.rootDataProvider = new PolygonDataProvider(polygonClient);
    this.rootLogger = createScopedLogger("core");
  }

  logger(scope: string): Logger {
    return this.rootLogger.child({ scope });
  }

  dataProvider(): DataProvider {
    this.rootDataProvider.setLogger(this.logger("dataProvider"));
    return this.rootDataProvider;
  }
}

export function createCoreServices() {
  return new CoreServices();
}
