import { useTypedSelector } from "../store";
import { Block } from "@ethersproject/providers";

export const useBlock = (
  blockNumber: number,
  {
    onSuccess,
  }: {
    onSuccess?: (blockNumber: Block) => void;
  } = {}
) => {
  const provider = useTypedSelector((state) => state.account.provider);

  const fetchBlock = async () => {
    if (!provider) return;
    const block = await provider.getBlock(blockNumber);
    onSuccess?.(block);
  };

  return { fetchBlock };
};
