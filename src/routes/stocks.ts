import { Router } from "express";
import { DataProvider } from "../interface/DataProvider";

export function createStocksRouter(dataProvider: DataProvider) {
  const router = Router();

  router.get("/:symbol", async (req, res) => {
    const { symbol } = req.params;

    try {
      const stock = await dataProvider.getStock(symbol);
      res.json(stock);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
}
