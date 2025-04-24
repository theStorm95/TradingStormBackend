import { Stock } from "../types";

export interface DataProvider {
  getStock(symbol: string): Promise<Stock>;
}
