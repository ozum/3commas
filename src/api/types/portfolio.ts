import type { PortfolioEntry } from "./portfolio-entry.js";

export interface PortfolioDto {
  name: string;
  id: number;
  createdAt: string;
  portfolioEntries: PortfolioEntry;
}
