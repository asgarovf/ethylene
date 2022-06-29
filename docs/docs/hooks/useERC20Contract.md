---
sidebar_position: 13
---

# useERC20Contract

This hook is used to initialize a ERC20 contract with specific address. It returns the EthyleneContract instance and the methods are auto-completed using typescript.

## Usage

Let's think of a case where we have a ERC20 contract and we want to initialize it inside our application.

```tsx
import { useERC20Contract } from "ethylene/hooks";

function App() {
  //highlight-next-line
  const contract = useERC20Contract({
    address: "0xContractAddress",
  });

  return (
    <div>
      <button
        onClick={async () => {
          //highlight-next-line
          const res = await contract?.methods.allowance.execute(); // methods are autocompleted
        }}
      >
        Get allowance
      </button>
    </div>
  );
}
```

You can also check the error and loading states of methods using the same way we did in `useContract` hook. Check [this link](/docs/hooks/useContract) for detailed usage of `useContract`.

## API

```tsx
type Props = {
  address: string; // contract address
};

type ReturnType = EthyleneContract;
```
