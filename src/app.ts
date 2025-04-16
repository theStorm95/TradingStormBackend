import express from "express";
import cors from "cors";
import helmet from "helmet";

import { createHealthRouter } from "./routes/health";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", createHealthRouter());

export default app;
