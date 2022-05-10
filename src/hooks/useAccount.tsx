import { useTypedSelector } from "store/store";

export const useAccount = () => {
  const { auth } = useTypedSelector((state) => state.account);

  return { auth };
};
