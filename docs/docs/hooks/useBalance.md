---
sidebar_position: 1
---

# useBalance

This hook is used to get your provider balance in direct, or in indirect way. Return type is [BigNumber](https://docs.ethers.io/v5/api/utils/bignumber/); therefore, you should be able to convert it properly while displaying. Good news! We are working on the formatters and you should be comfortable while working with BigNumbers.

## Usage

```tsx
import { useBalance } from "ethylene/hooks";

function App() {

  // highlight-next-line
  const { balance, fetchBalance, isFetching, setBalance, error } = useBalance();

  return (
    ...
  );
}
```

If you don't want to fetch the balance directly and only control it with the `fetchBalance`, you can use the following way.

```tsx
import { useBalance } from "ethylene/hooks";

function App() {

  // highlight-next-line
  const { balance, fetchBalance, isFetching, setBalance, error } = useBalance({
    direct: false,
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
  direct: boolean; // defaults to True
};

type ReturnType = {
  /* Balance amount */
  balance: BigNumber;

  /* Fetch the balance */
  fetchBalance: () => void;

  /* Change the balance amount to any BigNumber */
  setBalance: (arg: BigNumber) => void;

  /* Whether the balance is fetching */
  isFetching: boolean;

  /* If the balance fetching is failed, the error is set */
  error: any; // null initially
};
```
