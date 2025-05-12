import { Router } from "express";
import { DataProvider } from "../interface/DataProvider";
import { Logger } from "pino";

export function createStocksRouter(dataProvider: DataProvider, logger: Logger) {
  const router = Router();

  logger.info("Creating stocks router");

  router.get("/:symbol", async (req, res) => {
    const { symbol } = req.params;

    try {
      const stock = await dataProvider.getStock(symbol);
      res.json(stock);
    } catch (error) {
      logger.error(`Error fetching stock data for ${symbol}: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
}
