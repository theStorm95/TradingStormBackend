import { Logger } from "pino";

export function createMockLogger(): jest.Mocked<Logger> {
  return {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
    fatal: jest.fn(),
    trace: jest.fn(),
    child: jest.fn().mockReturnThis(),
    level: "info",
    levels: { values: {}, labels: {} },
    silent: false,
    flush: jest.fn(),
  } as unknown as jest.Mocked<Logger>;
}
