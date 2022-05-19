---
sidebar_position: 3
---

# IS_PROD

IS_PROD allows you to check whether you are in production build. It is the same as:

`process.env.NODE_ENV === "production"`

## Usage

```tsx
import { IS_PROD } from "ethylene/constants";

function App() {

  const execInProd = () => {
    if (IS_PROD) {
      console.log("We are in production");
    } else{
      console.log("We are in development");
    }
  }

  return (
    ...
  );
}
```
