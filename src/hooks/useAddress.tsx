import { useTypedSelector } from "../store";

export const useAddress = () => {
  const address = useTypedSelector((state) => state.account.address);
  return address;
};
