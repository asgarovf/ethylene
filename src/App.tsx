import { BigNumber, Contract } from "ethers";
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
  const { auth, provider, address, signer } = useAccount();
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
    address: "0xFeDFAF1A10335448b7FA0268F56D2B44DBD357de",
    method: "balanceOf",
    onSuccess: (res) => {
      console.log(res); // res will be BigNumber
    },
    args: [address],
  });

  const fn = async () => {
    if (!provider || !signer) return;

    const contract = new Contract(
      "0xFeDFAF1A10335448b7FA0268F56D2B44DBD357de",
      [
        "function claim(uint256 index, address account, uint256 amount, bytes32[] merkleProof)",
      ],
      provider
    );
    
    contract
      .connect(signer)
      .claim(
        17195,
        "0x114B242D931B47D5cDcEe7AF065856f70ee278C4",
        "0x1e2305ff140ffa0000",
        [
          "0xcff83dc3d3b0773d8adb04943449955adedd8bd23d670167b24ba0a0fd939707",
          "0x5f7ae12a8a14897206df2c923d175394ad72bf98f48b75e6ecf4c725ae2d53ec",
          "0x04a96c63da55959ff160f7bd79215c0adde69785fa602fa92a1c94a32a8870c1",
          "0xab142eb84a8fa90d73cb12b420ecdf9a1bc94c7cc84221d0a9f566ebc7b9e035",
          "0xb5fec6d6ef96789df703aca513d075599b180a74c9ddef079cf0d9896073e471",
          "0xe51fd39f15bc213a3a8df6316ae0e9fff8998173f45717b2eaa068b5dd35502e",
          "0x279b49c3f072899031f3438e30f1d0ebe46b70c1779443c3ee2ebf262a70ee13",
          "0xacabfc38253602d23f25097034fbe23ed021573738ca9e91765ac7689c6a4848",
          "0x15fc0244ac06377c2e7fb53004351a30b182e568ca9ac5598f55c3ac5dedbc9a",
          "0xdab0f2f795f17925ef5688007eda2c3ecfa30c7a17af6437f1c2ec14af145f4d",
          "0x1dd5a858d705e4f047db6954a67450819fed37344ecbe1bce8c0de5daf5d0f90",
          "0xb1773772d640d9435c26dc4e6e6097124b005a36fa6bbf89159906ed6711d14f",
          "0xab70e00779473d1fd090412e7b4348a6ac30a39d7c0f8c23ff176b0f99c7b4cc",
          "0x77e959b522af759f8ec1d4e3921fb15e7c411d3f2d218a3b851d466fa13d2b7f",
          "0x9f305d73cd846beef0c720d8a8d8d33f8aa3d7b97d81bcac7ab0f0bbfc188337",
          "0xf4755c1a95eae2670677faae00db08d0ea55bc87260510494220606f45bab1e0",
          "0x85401400b918a9957161c2c69647c2f5732a331a1f6e03cf18f94be155c1e472",
          "0x655496b06239dfa4df266c7b2486f0a33ba8ca0aadab8748e2154a523063769b",
        ]
      );
  };

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
      <button onClick={async () => await fn()}>test</button>
    </div>
  );
}

export default App;
