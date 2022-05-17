import { ERC20 } from "./abi/ERC20";
import { useAccount, useConnection, useContract } from "./hooks";

function App() {
  const { connect, disconnect } = useConnection();
  const { auth, provider } = useAccount();
  const contract = useContract({
    address: "0x24124124",
    abi: ERC20,
    provider: provider,
  });

  return (
    <div>
      asfafs
      <button onClick={connect}> {auth ? "Connected" : "Connect"} </button>
      {auth && <button onClick={disconnect}>Disconnect</button>}
      <button onClick={() => contract?.methods.allowance.executeAndWait()}>
        {contract?.methods.allowance.isLoading ? "Loading" : "Hey"}
      </button>
    </div>
  );
}

export default App;
