import { PolygonDataProvider } from "../../src/client";
import { createMockPolygonClient } from "../mocks";

describe("PolygonDataProvider tests", () => {
  it("should create an instance of PolygonDataProvider", () => {
    const mockPolygonClient = createMockPolygonClient();

    const polygonDataProvider = new PolygonDataProvider(mockPolygonClient);

    expect(polygonDataProvider).toBeInstanceOf(PolygonDataProvider);
  });

  describe("getStock", () => {
    it("should throw an Input Error if no ticker is provided", async () => {
      const mockPolygonClient = createMockPolygonClient();
      const polygonDataProvider = new PolygonDataProvider(mockPolygonClient);

      await expect(polygonDataProvider.getStock("")).rejects.toThrow(
        "Input Error: No ticker provided"
      );
    });

    it("should return a BuffetStock object", async () => {});
  });
});
