# parse-env-var

## Usage

```ts
import {
  requiredString, 
  optionalString,
  requiredInt,
  optionalInt,
  requiredBoolean,
  optionalBoolean
} from "parse-env-var";

process.env["STRING_VAR"] = "foo";
process.env["INT_VAR"] = "123";
process.env["BOOL_VAR"] = "true";

const optionalStringVar = requiredString("STRING_VAR"); // "foo"
const optionalStringVar = optionalString("NOT_SET");    // undefined
const requiredStringVar = requiredString("STRING_VAR"); // "foo"
const requiredStringVar = requiredString("NOT_SET");    // throws "Missing required environment variable: NOT_SET"

const optionalIntVar = optionalInt("INT_VAR");          // 123
const optionalIntVar = optionalInt("NOT_SET");          // undefined
const requiredIntVar = requiredInt("INT_VAR");          // 123
const requiredIntVar = requiredInt("NOT_SET");          // throws "Missing required environment variable: NOT_SET"

const optionalBooleanVar = optionalBoolean("BOOL_VAR"); // true
const optionalBooleanVar = optionalBoolean("NOT_SET");  // undefined
const requiredBooleanVar = requiredBoolean("BOOL_VAR"); // true
const requiredBooleanVar = requiredBoolean("NOT_SET");  // throws "Missing required environment variable: NOT_SET"

```

### Booleans

"true", "TRUE", "True", "1" are all considered `true` for boolean variables.  
"false", "FALSE", "False", "0" are all considered `false` for boolean variables.  
