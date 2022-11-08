
export function required<T>(variableName: string, getOptionalValue: (variableName: string) => T): T {
  const value = getOptionalValue(variableName);
  if(value === undefined) {
    throw new Error(`Missing required environment variable: ${variableName}`);
  } else {
    return value;
  }
}
