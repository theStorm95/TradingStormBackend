import z from "zod";

const polygonStockSchema = z.object({
  count: z.number(),
  next_url: z.string().nullable(),
  request_id: z.string(),
  results: z.array(
    z.object({
      cik: z.string(),
      company_name: z.string(),
    })
  ),
});
