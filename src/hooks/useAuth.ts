import { useTypedSelector } from "../store";

export const useAuth = () => {
  const auth = useTypedSelector((state) => state.account.auth);

  return auth;
};
