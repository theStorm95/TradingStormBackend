import { Logger } from "pino";
import { BuffetStock } from "../types";
import { IRestClient } from "@polygon.io/client-js";
import { DataProvider } from "../interface/DataProvider";

export class PolygonDataProvider implements DataProvider {
  constructor(
    private readonly polygonClient: IRestClient,
    private logger?: Logger
  ) {}

  setLogger(logger: Logger) {
    this.logger = logger;
  }

  async getStock(ticker: string): Promise<BuffetStock> {
    this.logger?.info(`Fetching stock data for ticker: ${ticker}`);

    if (!ticker) {
      throw new Error("Input Error: No ticker provided");
    }

    return {
      symbol: "AAPL",
      companyName: "Apple Inc.",
      industry: "Technology",
      marketCap: 2_500_000_000_000,
      currentRatio: 1.5,
      debtToEquityRatio: 1.2,
      freeCashFlow: 100_000_000_000,
      roe: 30,
      roa: 20,
      profitMargin: 25,
      peRatio: 28,
      pbRatio: 10,
      psRatio: 7,
      pegRatio: 1.5,
      eps: 5,
      revenueGrowth: 10,
      earningsGrowth: 12,
      dividendYield: 0.5,
      insiderOwnershipPercentage: 0.02,
      institutionalOwnershipPercentage: 0.6,
      moatRating: "Wide",
      managementRating: 9,
      oneYearReturn: 30,
      fiveYearReturn: 25,
      intrinsicValueEstimate: 200,
      marginOfSafety: 20,
    };
  }
}
