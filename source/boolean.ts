import { required } from "./utils/index.js";

function parseBool(value: string) {
  if(value.toLowerCase() === "true" || value === "1") {
    return true;
  } else if(value.toLowerCase() === "false" || value === "0") {
    return false;
  } else {
    return null;
  }
}

export function optionalBoolean(variableName: string): boolean | undefined {
  const stringValue = process.env[variableName];
  if(stringValue === undefined) {
    return undefined;
  } else {
    const value = parseBool(stringValue);
    if(value === null) {
      throw new Error(`Environment variable '${variableName}' is not a boolean.`);
    } else {
      return value;
    }
  }
}

export function requiredBoolean(variableName: string): boolean | undefined {
  return required(variableName, optionalBoolean);
}
