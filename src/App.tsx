import { useConnection } from "hooks/useConnection";
import {
  EthyleneInjectedConnector,
  EthyleneWalletConnectConnector,
} from "utils/connectors";

function App() {
  const { connectWallet } = useConnection();

  const connector = EthyleneWalletConnectConnector;

  return (
    <div>
      <button onClick={() => connectWallet(connector)}>connect</button>
    </div>
  );
}

export default App;
