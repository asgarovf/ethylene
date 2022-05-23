import { EthyleneConnector } from "../types/app";

declare let window: Window & any;


export const EthyleneInjectedConnector: EthyleneConnector = {
  name: "injected",
  provider: window.ethereum,
};
