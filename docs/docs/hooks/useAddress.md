---
sidebar_position: 4
---

# useAddress

Using this hook, you can get your wallet address.

## Usage

```tsx
import { useAddress } from "ethylene/hooks";

function App() {

  // highlight-next-line
  const address = useAddress();

  return (
    ...
  );
}
```

## API

```tsx
type ReturnType = string;
```
