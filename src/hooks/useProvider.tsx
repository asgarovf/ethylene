import { useTypedSelector } from "../store";

export const useProvider = () => {
  const provider = useTypedSelector((state) => state.account.provider);

  return provider;
};
