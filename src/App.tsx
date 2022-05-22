import { BigNumber } from "ethers";
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
  useContractFunction,
  useContractEvent,
  useBlockNumber,
} from "./hooks";
import { useERC20Balance } from "./hooks/useERC20Balance";

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

  const { execute } = useContractFunction<BigNumber>({
    abi: ERC20,
    address: "0xa9d19d5e8712C1899C4344059FD2D873a3e2697E",
    method: "balanceOf",
    onSuccess: (res) => {
      console.log(res); // res will be BigNumber
    },
    args: [address],
  });

  /* useContractEvent("Locked", {
    abi: ERC20,
    address: "0xa9d19d5e8712C1899C4344059FD2D873a3e2697E",
    callback: (res) => {
      console.log(res); // res will be BigNumber
    },
  }); */

  const { fetchBlockNumber, blockNumber } = useBlockNumber({
    onSuccess: (num) => {
      console.log(num);
    },
    direct: false,
  });

  const { balance: ercBalance } = useERC20Balance({
    address: "0xa9d19d5e8712C1899C4344059FD2D873a3e2697E",
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
      <button onClick={async () => await execute()}>Execute function</button>
      <button onClick={async () => await fetchBlockNumber()}>
        Get block number
      </button>
    </div>
  );
}

export default App;
