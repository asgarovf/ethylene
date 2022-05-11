import { useTypedSelector } from "../store";

export const useAccount = () => {
  const { auth } = useTypedSelector((state) => state.account);

  return { auth };
};
