---
sidebar_position: 7
---

# useContractFunction

This hook is used to call specific function from the smart contract. You can control the result of the call by passing `onError` and `onSuccess` functions to the hook's input object.

## execute

Let's think of a case where we have a ERC20 contract and we want to call **balanceOf** function to retrieve the balance.

```tsx
import { useContractFunction } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

function App() {
  const provider = useProvider();
  const address = useAddress();

  // highlight-next-line
  const { execute, isLoading, isFailed } = useContractFunction({
    abi: ERC20, // Contract Interface in JSON format
    address: "0xContractAddress",
    method: "balanceOf",
    onSuccess: (res) => console.log(res),
    args: [address],
  });

  return (
    <div>
      <button onClick={async () => await execute()}>
        Call a function named balanceOf
      </button>
    </div>
  );
}
```

As you can see, the arguments are passed as an array to the hook.

## executeAndWait

If you want to wait for transaction to be confirmed before loading state resolves, you can use `executeAndWait` function that is returned from the hook.

```tsx
import { useContractFunction } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

function App() {
  const provider = useProvider();
  const address = useAddress();

  // highlight-next-line
  const { executeAndWait, isLoading, isFailed } = useContractFunction({
    abi: ERC20, // Contract Interface in JSON format
    address: "0xContractAddress",
    method: "method",
    onSuccess: (res) => console.log(res),
    args: [
      /* args here */
    ],
  });

  return (
    <div>
      <button onClick={async () => await execute()}>
        Call a function named balanceOf
      </button>
      {isLoading && <span>Loading...</span>}
    </div>
  );
}
```

## Typing

:::tip Result type with Typescript
You can set a type to **res** that is passed to **onSuccess** function.
To do that you have to just create your custom type and pass it to `useContractFunction` hook. You can find the example below.
:::

```tsx
import { useContractFunction } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";
import { BigNumber } from "ethers";

function App() {
   ...

  // highlight-next-line
  const { execute } = useContractFunction<BigNumber>({
    abi: ERC20,
    address: "0xContractAddress",
    method: "balanceOf",
    // highlight-next-line
    onSuccess: (res) => {
      console.log(res); // res will be BigNumber
    },
    args: [address],
  });

  return (
    ...
  );
}
```

## API

```tsx
type Props = {
  address: string; // contract address
  abi: ContractInterface; // Only JSON Interface is supported for now
  method: string; // method name
  args?: any; // arguments as array
  connectSigner?: boolean; // whether to call `connect` method before call. Defaults to true
  onError?: (err: any) => void; // Function called during error
  onSuccess?: (res: T) => void; // Function called after success
};

type ReturnType = {
  isLoading: boolean;
  isFailed: boolean;
  execute: () => Promise<void>;
  executeAndWait: () => Promise<void>;
};
```
