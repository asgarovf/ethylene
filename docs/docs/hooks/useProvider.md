---
sidebar_position: 2
---

# useProvider

This hook helps you get Provider information from the state.

## Usage

```tsx
import { useProvider } from "ethylene/hooks";

function App() {

  // highlight-next-line
  const provider = useProvider();

  return (
    ...
  );
}
```

## API

```tsx
type ReturnType = Web3Provider | undefined;
```
