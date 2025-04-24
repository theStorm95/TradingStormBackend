import { IRestClient, restClient } from "@polygon.io/client-js";

export function createMockPolygonClient(): jest.Mocked<IRestClient> {
  const client = restClient("fake-token") as jest.Mocked<IRestClient>;

  return client;
}
