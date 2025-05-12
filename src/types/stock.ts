export interface BuffetStock {
  // Basic Identification
  symbol: string; // Ticker symbol
  companyName: string; // Full name of the company
  industry: string; // Industry sector (e.g., Consumer Goods, Technology)
  marketCap: number; // Market capitalization in dollars

  // Financial Health
  currentRatio: number; // Current assets / current liabilities (>1.5 is healthy)
  debtToEquityRatio: number; // Debt / Equity (lower is generally better)
  freeCashFlow: number; // Free Cash Flow (operating cash flow - capex)

  // Profitability
  roe: number; // Return on Equity (%)
  roa: number; // Return on Assets (%)
  profitMargin: number; // Net profit margin (%)

  // Valuation Metrics
  peRatio: number; // Price to Earnings Ratio (lower generally indicates undervaluation)
  pbRatio: number; // Price to Book Ratio (<1 often indicates undervaluation)
  psRatio: number; // Price to Sales Ratio (lower can indicate undervaluation)
  pegRatio: number; // Price/Earnings to Growth Ratio (ideally <1 indicates undervaluation with growth)

  // Earnings & Revenue
  eps: number; // Earnings Per Share (most recent annual EPS)
  revenueGrowth: number; // Year-over-year revenue growth (%)
  earningsGrowth: number; // Year-over-year earnings growth (%)

  // Dividend Information (if applicable)
  dividendYield?: number; // Annual dividend yield (%), optional as small caps often reinvest rather than pay dividends

  // Insider & Institutional Ownership
  insiderOwnershipPercentage: number; // Percentage owned by insiders (higher can indicate confidence)
  institutionalOwnershipPercentage: number; // Percentage owned by institutions (lower may suggest overlooked)

  // Qualitative Analysis (Optional, but recommended)
  moatRating?: "None" | "Narrow" | "Wide"; // Economic moat (competitive advantage)
  managementRating?: number; // Management rating (subjective, e.g., 1-10)

  // Historical Stock Performance (for context, optional)
  oneYearReturn?: number; // Stock return (%) over last year
  fiveYearReturn?: number; // Average annual return over 5 years (%)

  // Additional Buffett-specific metrics (Optional but powerful)
  intrinsicValueEstimate?: number; // Calculated intrinsic value based on discounted cash flows
  marginOfSafety?: number; // Percentage difference between intrinsic value and current price (Buffett typically looks for >20%)
}
