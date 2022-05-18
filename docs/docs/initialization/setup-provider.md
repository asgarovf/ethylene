---
sidebar_position: 1
---

# Setup the provider

Setting up the **Provider** is an important part during the initialization. Since the application uses **Redux** for state management, you have to wrap the application with the Redux **Provider**. Thankfully, we created the `EthyleneProvider` to simplify the setup process.

- Note: Do not misunderstand the `Provider` as WEB3 Provider. This part is only related to state management.

## Wrapping the Application

```tsx title="index.tsx"
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//highlight-next-line
import { EthyleneProvider } from "ethylene/utils";

ReactDOM.render(
  <React.StrictMode>
    //highlight-next-line
    <EthyleneProvider>
      <App />
      //highlight-next-line
    </EthyleneProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Now you should be good to go to start connecting your wallet and creating the dApp!

# API

```tsx
type Props = {
  children: ReactNode;
};
```
