---
sidebar_position: 2
---

# useConnection

## Connect your wallet

The `connect` function handles all the wallet connection process.

```tsx
import { useConnection } from "ethylene/hooks";

function App() {
  // highlight-next-line
  const { connect } = useConnection();

  return (
    <div className="App">
      // highlight-next-line
      <button onClick={connect}>Connect your wallet</button>
    </div>
  );
}
```

## Disconnect

Although the disconnect function clears the state that hold connection details,
disconnection in wallet level from the website is not possible.

```tsx
import { useConnection } from "ethylene/hooks";

function App() {
  // highlight-next-line
  const { disconnect } = useConnection();

  return (
    <div className="App">
      // highlight-next-line
      <button onClick={disconnect}>Disconnect and clear state</button>
    </div>
  );
}
```

## Example error management during connection

`onError` property can be passed to `useConnection` hook. You can define action easily and manage
the state accordingly.

```tsx
import { useConnection } from "ethylene/hooks";

function App() {
  const { connect } = useConnection({
    // highlight-next-line
    onError: (err) => {
      alert(err);
      console.error("Error happened here");
    },
  });

  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
    </div>
  );
}
```

## API

```tsx
type Props = {
  /* Connector configuration */
  connector?: EthyleneConnector; // EXPERIMENTAL

  /* Handle the errors during the connection */
  onError?: (err: Error) => void;

  /* Handle the error when metamask is not installed */
  onMetamaskError?: () => void;
};

type ReturnType = {
  /* Handles the connection */
  connect: () => void;

  /* Handles the disconnection */
  disconnect: () => void;

  /* Whether the connection failed */
  isConnectionFailed: boolean;

  /* Whether the connection is in process */
  isConnecting: boolean;

  /* The selected provider's library based name */
  providerName: EthyleneConnectorName; // EXPERIMENTAL
};
```
