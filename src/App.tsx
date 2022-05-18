import { ERC20 } from "./abi/ERC20";
import { AVAX_MAINNET } from "./constants";
import {
  useAccount,
  useConnection,
  useContract,
  useRightNetwork,
  useOnNetworkChange,
  useOnAccountsChange,
} from "./hooks";

function App() {
  const { connect, disconnect } = useConnection();
  const { auth, provider } = useAccount();
  const contract = useContract({
    address: "0x24124124",
    abi: ERC20,
    provider: provider,
  });

  const { isRightNetwork, switchTo } = useRightNetwork(AVAX_MAINNET);

  useOnNetworkChange(() => window.location.reload());
  useOnAccountsChange(() => window.location.reload(), {
    deps: [],
    interval: 1000,
  });

  return (
    <div>
      asfafs
      <button onClick={connect}> {auth ? "Connected" : "Connect"} </button>
      {auth && <button onClick={disconnect}>Disconnect</button>}
      <button onClick={() => contract?.methods.allowance.executeAndWait()}>
        {contract?.methods.allowance.isLoading ? "Loading" : "Hey"}
      </button>
      <button onClick={switchTo}>Switch to correct network</button>
    </div>
  );
}

export default App;
