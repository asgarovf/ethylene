import { useAccount } from "hooks/useAccount";
import { useConnection } from "hooks/useConnection";

function App() {
  const { connect, disconnect } = useConnection();
  const { auth } = useAccount();

  return (
    <div>
      <button onClick={() => connect()}>
        {" "}
        {auth ? "Connected" : "Connect"}{" "}
      </button>
      {auth && <button onClick={disconnect}>Disconnect</button>}
    </div>
  );
}

export default App;
