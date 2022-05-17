import { useTypedSelector } from "../store";

export const useAccount = () => {
  const { auth, provider, signer, address } = useTypedSelector(
    (state) => state.account
  );

  return { auth, provider, signer, address };
};
