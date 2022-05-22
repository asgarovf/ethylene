import { useTypedSelector } from "../store";

export const useBlockTimestamp = () => {
  const provider = useTypedSelector((state) => state.account.provider);

  const fetchBlockTimestamp = async () => {
    if (!provider) return;
    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);
    return block.timestamp;
  };

  return { fetchBlockTimestamp };
};
