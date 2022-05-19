import { useTypedSelector } from "../store";

export const useSigner = () => {
  const signer = useTypedSelector((state) => state.account.signer);

  return signer;
};
