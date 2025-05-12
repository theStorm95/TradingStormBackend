import pino, { Logger } from "pino";

const baseLogger = pino({
  level: process.env.LOG_LEVEL || "info",
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
    },
  },
});

export const createScopedLogger = (scope: string): Logger => {
  return baseLogger.child({ scope });
};
