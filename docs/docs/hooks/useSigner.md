---
sidebar_position: 3
---

# useSigner

This hook helps you get Signer information from the state

## Usage

```tsx
import { useSigner } from "ethylene/hooks";

function App() {

  // highlight-next-line
  const signer = useSigner();

  return (
    ...
  );
}
```

## API

```tsx
type ReturnType = JsonRpcSigner | undefined;
```
