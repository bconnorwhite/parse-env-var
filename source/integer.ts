import { required } from "./utils/index.js";

export function optionalInt(variableName: string): number | undefined {
  const value = process.env[variableName];
  if(value === undefined) {
    return undefined;
  } else if(value.match(/^\d+$/) === null) {
    throw new Error(`Environment variable '${variableName}' is not an integer.`);
  } else {
    return parseInt(value);
  }
}

export function requiredInt(variableName: string): number {
  return required(variableName, optionalInt);
}
