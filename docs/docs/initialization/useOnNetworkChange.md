---
sidebar_position: 5
---

# useOnNetworkChange

useOnNetworkChange is used to register events for network change actions. If you want to refresh the page, or update any state on network change, you can use this hook.

You should know that every usage of this hook registers an event for network change. Calling this hook once is enough to register any event that you want.

```tsx
import { useOnNetworkChange } from "ethylene/hooks";

function App() {
  //highlight-next-line
  useOnNetworkChange(() => window.location.reload()); //Refresh the page on network change

  return (
      ...
  );
}
```

You can also send dependency array as second parameter to this hook to reregister the event on state updates.

```tsx
import { useOnNetworkChange } from "ethylene/hooks";
import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)

  // Reassign the event when value changes
  //highlight-next-line
  useOnNetworkChange(() => window.location.reload(), [value]);

  return (
      ...
  );
}
```

## API

```tsx
args: (
  /* Callback function that you want to execute on network change*/
  callback: () => void,

   /* Dependency for reassigning events */
  deps: any[]
)
```
