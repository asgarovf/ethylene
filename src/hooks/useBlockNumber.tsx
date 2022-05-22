import { useEffect, useState } from "react";
import { useTypedSelector } from "../store";

export const useBlockNumber = ({
  direct = true,
  deps = [],
  onSuccess,
}: {
  direct?: boolean;
  deps?: any[];
  onSuccess?: (blockNumber: number) => void;
} = {}) => {
  const [blockNumber, setBlockNumber] = useState<null | number>(null);
  const provider = useTypedSelector((state) => state.account.provider);

  const fetchBlock = async () => {
    if (!provider) return;
    const block = await provider.getBlockNumber();
    setBlockNumber(block);
    onSuccess?.(block);
  };

  useEffect(() => {
    if (direct) {
      fetchBlock();
    }
  }, [provider, ...deps]);

  return { fetchBlockNumber: fetchBlock, blockNumber, setBlockNumber };
};
