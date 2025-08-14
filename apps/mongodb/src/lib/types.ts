import { z } from "zod";

export const LangSchema = z.enum(["en", "es"]).default("en");

export type Lang = z.infer<typeof LangSchema>;
