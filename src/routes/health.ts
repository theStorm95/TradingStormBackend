import { Router } from "express";

export function createHealthRouter() {
  const router = Router();

  router.get("/", (_req, res) => {
    res.status(200).send("OK");
  });

  return router;
}
