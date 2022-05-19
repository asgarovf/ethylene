---
sidebar_position: 2
---

# Networks

Pre-defined networks that are ready for usage.

## Network definition

```tsx
type EthyleneNetwork = {
  chainId: string;
  name: string;
  rpcUrls: string[];
  nativeCurrency: { name?: string; decimals?: number; symbol?: string };
};
```

## AVAX MAINNET

```tsx
import { AVAX_MAINNET } from "ethylene/constants";

function App() {

  return (
    ...
  );
}
```

## AVAX FUJI C CHAIN

```tsx
import { AVAX_FUJI_C_CHAIN } from "ethylene/constants";

function App() {

  return (
    ...
  );
}
```
