import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Value Investing API");
  console.log("GET /");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
