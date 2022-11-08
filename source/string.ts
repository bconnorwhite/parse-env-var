import { required } from "./utils/index.js";

export function optionalString(variableName: string): string | undefined {
  return process.env[variableName];
}

export function requiredString(variableName: string): string {
  return required(variableName, optionalString);
}
