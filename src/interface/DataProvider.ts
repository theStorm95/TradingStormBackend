import { Logger } from "pino";
import { BuffetStock } from "../types/stock";

/**
 * Interface for data providers.
 */
export interface DataProvider {
  /**
   * Sets the logger for the data provider.
   * @param logger - The logger to set.
   */
  setLogger(logger: Logger): void;

  /**
   * Fetches stock data for a given symbol.
   * @param symbol - The stock symbol to fetch data for.
   * @returns A promise that resolves to a BuffetStock object.
   */
  getStock(symbol: string): Promise<BuffetStock>;
}
