---
sidebar_position: 11
---

# useBlock

`useBlock` hook is used to fetch the block with the given block number.

You can reach the Block type of Ethers from [this link](https://docs.ethers.io/v5/api/providers/types/#providers-Block).

## Usage

```tsx
import { useBlock } from "ethylene/hooks";

function App() {
  const {
    fetchBlock,
    // highlight-next-line
  } = useBlock({
    onSuccess: (block) => {
      console.log(block);
    },
  });

  return (
    <div>
      // highlight-next-line
      <button
        onClick={async () => await fetchBlock(124124 /* example number */)}
      >
        Fetch block
      </button>
    </div>
  );
}
```

## API

```tsx
type Props = {
  onSuccess?: (blockNumber: Block) => void;
};

type ReturnType = {
  fetchBlock: (blockNumber: number) => Promise<Block>;
};
```
