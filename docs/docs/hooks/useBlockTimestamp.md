---
sidebar_position: 12
---

# useBlockTimestamp

`useBlockTimestamp` hook is used to fetch current timestamp from the block.
It provides a function that basically returns the latest block's timestamp.

## Usage

```tsx
import { useBlockTimestamp } from "ethylene/hooks";

function App() {
  const {
    fetchBlockTimestamp,
    // highlight-next-line
  } = useBlockTimestamp();

  return (
    <div>
      // highlight-next-line
      <button
        onClick={async () => {
          const timestamp = await fetchBlockTimestamp();
          console.log(`The timestamp is ${timestamp}`);
        }}
      >
        Fetch block timestamp
      </button>
    </div>
  );
}
```

## API

```tsx
type ReturnType = {
  fetchBlockTimestamp: () => Promise<number>;
};
```
