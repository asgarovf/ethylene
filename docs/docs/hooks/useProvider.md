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
  const { provider, setProvider} = useProvider();

  return (
    ...
  );
}
```

## API

```tsx
type ReturnType = {
  provider: Web3Provider | undefined;
  setProvider: (to: Web3Provider) => void;
};
```
