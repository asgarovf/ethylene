---
sidebar_position: 4
---

# useRightNetwork

This hook is used to check whether you are connected to the right network. Also, you can use the `switchTo` function that is returned from the hook to change the network to correct one.

## Network definition

We created type EthyleneNetwork type and you must provide the details accordingly to the `useRightNetwork` hook. The hook accepts this network object type as prop and handles everything for you.

```tsx
type EthyleneNetwork = {
  chainId: string;
  name: string;
  rpcUrls: string[];
  nativeCurrency: { name?: string; decimals?: number; symbol?: string };
};
```

The are several pre-defined and commonly used networks in **constants** section. However, you can define your own network too!

```tsx
import { useRightNetwork } from "ethylene/hooks";
import { AVAX_MAINNET } from "ethylene/constants"; // An example pre-defined network

function App() {
  // highlight-next-line
  const { isRightNetwork, switchTo } = useRightNetwork(AVAX_MAINNET);

  return (
    <div className="App">
      {isRightNetwork ? (
        <p>You are connected to correct network</p>
      ) : (
        // highlight-next-line
        <button onClick={switchTo}>Switch to correct network</button>
      )}
    </div>
  );
}
```

## API

```tsx
type Props = {
  /* Network that you want to connect */
  network: EthyleneNetwork;
};

type ReturnType = {
  /* Function that handles the switching to the provided network */
  switchTo: () => void;

  /* Whether you are connected to the right network */
  isRightNetwork: boolean;
};
```
