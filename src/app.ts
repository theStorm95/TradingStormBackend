import express from "express";
import cors from "cors";
import helmet from "helmet";

import { createHealthRouter } from "./routes";
import { createStocksRouter } from "./routes";
import { createCoreServices } from "./core";

const app = express();
const coreServices = createCoreServices();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", createHealthRouter());
app.use("/stocks", createStocksRouter(coreServices.dataProvider));

export default app;
