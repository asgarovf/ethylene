import { useAccount } from "./hooks";
import { useConnection } from "./hooks";

function App() {
  const { connect, disconnect } = useConnection();
  const { auth } = useAccount();

  return (
    <div>
      asfafs
      <button onClick={() => connect()}>
        {" "}
        {auth ? "Connected" : "Connect"}{" "}
      </button>
      {auth && <button onClick={disconnect}>Disconnect</button>}
    </div>
  );
}

export default App;
