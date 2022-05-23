---
sidebar_position: 6
---

# useOnAccountsChange

useOnAccountsChange is used to register events for account change actions in defined time interval. The default value of this interval is **1000 (milliseconds)**. It means that, in every 1 second, the app checks the account change and executes the callback. `interval` is given as second parameter to the hook inside an object in addition to `deps`. It is used to reassign the event on any value change.

You should know that every usage of this hook registers an event for network change. Calling this hook once is enough to register any event that you want.

```tsx
import { useOnAccountsChange } from "ethylene/hooks";

function App() {
  //highlight-next-line
  useOnAccountsChange(() => window.location.reload()); //Refresh the page on accounts change

  return (
      ...
  );
}
```

### Example with custom timer and additional dependencies.

```tsx
import { useOnAccountsChange } from "ethylene/hooks";
import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)

  // Reassign the event when value changes and the interval is 500 ms
  //highlight-next-line
   useOnAccountsChange(() => window.location.reload(), {
    deps: [value],
    interval: 500,
  });

  return (
      ...
  );
}
```

## API

```tsx
args: (
  /* Callback function that you want to execute on network change */
  callback: () => void,


  /* Dependency and interval object */
  {
    deps,
    interval
  } : {
    deps?: any[],
    interval?: number,
  }

)
```
