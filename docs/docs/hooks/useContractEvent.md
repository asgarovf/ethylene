---
sidebar_position: 8
---

# useContractEvent

This hook is used to assign callbacks for events that is triggered from the Smart Contract.

## Usage

Let's say we have an event called `transferred`. We can listen to the event as below:

```tsx
import { useContractEvent } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

function App() {
  // highlight-next-line
  useContractEvent("transferred", {
    abi: ERC20,
    address: "0xContractAddress",
    callback: (data) => {
      console.log(data);
    },
  });

  return (
    ...
  );
}
```

## Typing

If you want to add dynamic types to the `data` that is coming from the event, you can pass **array of types** to the hook. The example is given below

```tsx
import { useContractEvent } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

function App() {
  // highlight-next-line
  useContractEvent<[string]>("transferred", {
    abi: ERC20,
    address: "0xContractAddress",
    callback: (data) => {
      // data[0] will be string
      console.log(data);
    },
  });

  return (
    ...
  );
}
```

## API

```tsx
type Props = [
  event: string,
  {
    address: string; // contract address
    abi: ContractInterface; // Only JSON Interface is supported for now
    deps?: any[]; // reassign on event change
    callback?: (data: T[]) => void; // Callback that is called on event trigger
  }
];

type ReturnType = void;
```
