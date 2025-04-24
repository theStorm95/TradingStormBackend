import { PolygonDataProvider } from "../client";
import { restClient } from "@polygon.io/client-js";
import { DataProvider } from "../interface/DataProvider";

export class CoreServices {
  public readonly dataProvider: DataProvider;

  constructor() {
    const polygonClient = restClient(process.env.POLYGON_API_KEY || "");
    this.dataProvider = new PolygonDataProvider(polygonClient);
  }
}

export function createCoreServices() {
  return new CoreServices();
}
