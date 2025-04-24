import { PolygonDataProvider } from "../../src/client";
import { createMockPolygonClient } from "../mocks";

describe("PolygonDataProvider tests", () => {
  it("should create an instance of PolygonDataProvider", () => {
    const mockPolygonClient = createMockPolygonClient();

    const polygonDataProvider = new PolygonDataProvider(mockPolygonClient);

    expect(polygonDataProvider).toBeInstanceOf(PolygonDataProvider);
  });
});
