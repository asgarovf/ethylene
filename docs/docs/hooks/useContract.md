---
sidebar_position: 5
---

# useContract

You can use this hook to call view functions, send transactions and interact with the smart contract that is defined with the given properties.

The main advantage of this hook is that you can control the loading and error states.

## Usage

Let's think of a case where we have a ERC20 contract and we want to call a fictional function called **allowance**. You can follow the pattern below to call the function and check the loading and error states of it.

```tsx
import { useContract } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

function App() {
  const provider = useProvider();

  // highlight-next-line
  const contract = useContract({
    address: "0xContractAddress",
    abi: ERC20,
    provider: provider,
  });

  return (
    <div>
      <button
        onClick={async () => {
          /* pass your arguments in respective order */
          const res = await contract?.methods.allowance.execute();
        }}
      >
        Call a function named allowance
      </button>
      <span>{contract?.methods.allowance.isLoading && "Loading..."}</span>
      <span>{contract?.methods.allowance.isFailed && "Failed"}</span>
    </div>
  );
}
```

When you are sending a transaction to the Smart contract, you might need to wait for the transaction to be confirmed to manage the state properly. You can use the `executeAndWait` method. Example is given below.

```tsx
import { useContract } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

function App() {
  const provider = useProvider();

  const contract = useContract({
    address: "0xContractAddress",
    abi: ERC20,
    provider: provider,
  });

  return (
    <div>
      <button
        onClick={async () => {
          // highlight-next-line
          const res = await contract?.methods.methodName.executeAndWait();
        }}
      >
        Call a function named allowance
      </button>
    </div>
  );
}
```

## Typing

:::tip Method autocomplete for Typescript
You can use Typescript types to enable autocomplete for you methods. The example is given below. It will help you to see all the contract methods during the coding without being needed to check the abi again.

Unfortunately, the argument types have not been implemented yet, but it is in process!
:::

```tsx
import { useContract } from "ethylene/hooks";
import { ERC20 } from "ethylene/constants";

// highlight-next-line
type ContractMethods = "allowance" | "balanceOf" // Add other methods like this

function App() {
  const provider = useProvider();

  // Send your custom type to hook to enable autocomplete
  // highlight-next-line
  const contract = useContract<ContractMethods>({
    address: "0xContractAddress",
    abi: ERC20,
    provider: provider,
  });

  return (
    ...
  );
}
```

## API

```tsx
type Props = {
  /* Whether to fetch balance directly  */
  address: string;
  abi: ContractInterface; // Only JSON Interface is supported for now
  provider: Web3Provider;
};

type ReturnType = EthyleneContract | null;
```

:::info
All interface formats will be supported in the future.
:::

# EthyleneContract Interface

```tsx
class EthyleneContract = {
  ethersContract: Contract; // Built-in ethers contract
  methods: MethodInterface; // Defined Below
};

type MethodInterface<T extends string> = {
  [key in T]: {
    // Execute a function from Smart Contract
    execute: (...args: any) => Promise<any>;

    // Execute a function from Smart Contract and wait for the transaction
    executeAndWait: (...args: any) => Promise<any>;

    // is the transaction loading
    isLoading: boolean;

    // is the transaction failed
    isFailed: boolean;
  };
};
```
