import { IRestClient } from "@polygon.io/client-js";
import { DataProvider } from "../interface/DataProvider";
import { Stock } from "../types";

export class PolygonDataProvider implements DataProvider {
  constructor(private readonly polygonClient: IRestClient) {}

  async getStock(): Promise<Stock> {
    return {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 150.0,
    };
  }
}
