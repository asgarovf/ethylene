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

## ETHEREUM MAINNET

```tsx
import { ETHEREUM_MAINNET } from "ethylene/constants";

function App() {

  return (
    ...
  );
}
```

## RINKEBY

```tsx
import { RINKEBY } from "ethylene/constants";

function App() {

  return (
    ...
  );
}
```

## BSC MAINNET

```tsx
import { BSC_MAINNET } from "ethylene/constants";

function App() {

  return (
    ...
  );
}
```

## BSC TESTNET

```tsx
import { BSC_TESTNET } from "ethylene/constants";

function App() {

  return (
    ...
  );
}
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
