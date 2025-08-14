import { z } from "zod";

export const LangSchema = z.enum(["en", "es"]).default("en");
export const LocaleSchema = z
  .enum(["us", "mx", "ca", "uk", "de", "jp"])
  .default("us");

export type Lang = z.infer<typeof LangSchema>;
export type Locale = z.infer<typeof LocaleSchema>;
