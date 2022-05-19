---
sidebar_position: 1
---

# useAuth

Using this hook, you can check whether you are connected to the wallet.

## Usage

```tsx
import { useAuth } from "ethylene/hooks";

function App() {

  // highlight-next-line
  const auth = useAuth();

  return (
    ...
  );
}
```

## API

```tsx
type ReturnType = boolean;
```
