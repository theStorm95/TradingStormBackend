import { Logger } from "pino";
import express from "express";
import request from "supertest";
import { createMockLogger } from "../mocks";
import { createMockDataProvider } from "../mocks";
import { DataProvider } from "../../src/interface";
import { createStocksRouter } from "../../src/routes";

jest.mock("../../src/client/PolygonDataProvider");

describe("Stock Route", () => {
  let app: express.Express;
  let mockDataProvider: jest.Mocked<DataProvider>;
  let mockLogger: jest.Mocked<Logger>;

  beforeEach(() => {
    mockDataProvider = createMockDataProvider();
    mockLogger = createMockLogger();

    app = express();
    app.use(express.json());
    app.use("/stocks", createStocksRouter(mockDataProvider, mockLogger));
  });

  describe("GET /:symbol", () => {
    it("should return a 500 if an unknown error is thrown by the dataProvider", async () => {
      mockDataProvider.getStock.mockImplementation(() => {
        throw new Error("Unknown error");
      });

      const res = await request(app).get("/stocks/AAPL");

      expect(res.status).toBe(500);
    });

    it("should return the stock data if the symbol is valid", async () => {
      mockDataProvider.getStock.mockResolvedValue({
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
      });

      const res = await request(app).get("/stocks/AAPL");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
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
      });
    });
  });
});
