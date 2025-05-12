import { DataProvider } from "../../src/interface";

export function createMockDataProvider(): jest.Mocked<DataProvider> {
  return {
    setLogger: jest.fn(),
    getStock: jest.fn(),
  };
}
