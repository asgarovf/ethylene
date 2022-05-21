---
sidebar_position: 8
---

# useERC20Balance

This hook is used to get balance of your extended ERC20 token. It uses **balanceOf** method in background and sets the state accordingly.

## Usage

Let's think of a case where we have a ERC20 contract and we want to call **balanceOf** function to retrieve the balance.

```tsx
import { useERC20Balance } from "ethylene/hooks";

function App() {
  const {
    balance,
    fetchBalance,
    isFetching,
    error,
    // highlight-next-line
  } = useERC20Balance({
    address: "0xContractAddress",
    onSuccess: (res) => {
      console.log(res); // res is BigNumber here
    },
  });

  return (
    <div>
      // highlight-next-line
      <button onClick={async () => await fetchBalance()}>Fetch balance</button>
    </div>
  );
}
```

## API

```tsx
type Props = {
  address: string; // contract address
  direct?: boolean; // whether to fetch th balance directly
  deps?: any[]; // Fetch balance when the values inside **deps** change
  onSuccess?: (balance: BigNumber) => void;
};

type ReturnType = {
  fetchBalance: () => Promise<void>;
  balance: BigNumber;
  setBalance: (to: BigNumber) => void;
  isFetching: boolean;
  error: any;
};
```
