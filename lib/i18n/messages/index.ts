import type { Locale } from "../types";
import { en, type Messages } from "./en";
import { fa } from "./fa";
import { sv } from "./sv";

export type { Messages };

const messages: Record<Locale, Messages> = { en, sv, fa };

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? en;
}
