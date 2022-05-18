---
sidebar_position: 3
---

# useAccount

This hook helps you to obtain your WEB3 connection details in components. The available states are

- **auth**: whether the user is connected
- **provider**: Web3 provider
- **signer**: Web3 signer obtained from provider
- **address**: your wallet address

```tsx
import { useAccount } from "ethylene/hooks";

function App() {
  // highlight-next-line
  const { auth, provider, signer, address } = useAccount();

  return (
    ...
  );
}
```

You can use **auth** value to conditionally render the components, handle the transaction sending states.

```tsx
import { useAccount } from "ethylene/hooks";

function App() {
  const { auth } = useAccount();

  useEffect(() => {
      if(!auth) return; // No operation if not connected

      ... // send your transactions or run a view function

  }, [auth])

  return (
    ...
  );
}
```

## API

```tsx
type ReturnType = {
  /* Whether you are connected to dApp */
  auth: boolean;

  /* Web3 Provider */
  provider: any;

  /* Web3 Signer */
  signer: any;

  /* Your address string */
  address: string;
};
```
