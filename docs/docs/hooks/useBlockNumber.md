---
sidebar_position: 10
---

# useBlockNumber

`useBlockNumber` hook is used to fetch the block number from the provider

## Usage

```tsx
import { useBlockNumber } from "ethylene/hooks";

function App() {
  const {
    blockNumber,
    fetchBlockNumber,
    // highlight-next-line
  } = useBlockNumber();

  return (
    <div>
      // highlight-next-line
      <button onClick={async () => await fetchBlockNumber()}>
        Fetch block number
      </button>
    </div>
  );
}
```

## API

```tsx
type Props = {
  direct?: boolean; // Whether to fetch the block number on component mount
  deps?: any[]; // Fetch block number when the values inside deps change
  onSuccess?: (blockNumber: number) => void;
};

type ReturnType = {
  fetchBlockNumber: () => Promise<number>;
  blockNumber: number;
  setBlockNumber: (to: number) => void;
};
```
