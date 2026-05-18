import type { Messages } from "./messages/en";

export type TranslateParams = Record<string, string | number>;

export function createTranslator(messages: Messages) {
  return function t(key: string, params?: TranslateParams): string {
    const keys = key.split(".");
    let value: unknown = messages;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    if (typeof value !== "string") return key;

    if (!params) return value;

    return Object.entries(params).reduce(
      (text, [param, paramValue]) => text.replaceAll(`{${param}}`, String(paramValue)),
      value
    );
  };
}

export type TFunction = ReturnType<typeof createTranslator>;
