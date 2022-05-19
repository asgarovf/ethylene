import { Interface } from "ethers/lib/utils";
import { ERC20 } from "./abi/ERC20";
import { AVAX_MAINNET } from "./constants";
import {
  useAccount,
  useConnection,
  useContract,
  useRightNetwork,
  useOnNetworkChange,
  useOnAccountsChange,
  useBalance,
} from "./hooks";

function App() {
  const { connect, disconnect } = useConnection();
  const { auth, provider, address } = useAccount();
  const contract = useContract({
    address: "0xa9d19d5e8712C1899C4344059FD2D873a3e2697E",
    abi: ERC20,
    provider: provider,
  });

  const { isRightNetwork, switchTo } = useRightNetwork(AVAX_MAINNET);

  useOnNetworkChange(() => window.location.reload());
  useOnAccountsChange(() => window.location.reload(), {
    deps: [],
    interval: 1000,
  });
  const { balance, fetchBalance, isFetching, setBalance, error } = useBalance({
    direct: false,
  });

  return (
    <div>
      asfafs
      <button onClick={connect}> {auth ? "Connected" : "Connect"} </button>
      {auth && <button onClick={disconnect}>Disconnect</button>}
      <button
        onClick={async () => {
          const res = contract?.methods.allowance.execute(
            address,
            "0x635fa23B10a2418cC4224BE1EAab46a5E9252892"
          );
          console.log(res);
        }}
      >
        {contract?.methods.allowance.isLoading ? "Loading" : "Hey"}
      </button>
      <button onClick={switchTo}>Switch to correct network</button>
      <button onClick={fetchBalance}>Fetchbalance</button>
    </div>
  );
}

export default App;
