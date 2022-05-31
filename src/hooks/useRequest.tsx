import { useState } from "react";

export const useRequest = <T, K extends Array<any> = []>(
  cb: (...args: K) => Promise<T>,
  {
    onSuccess,
    onFail,
    onStart,
  }: {
    onSuccess?: (res: T, ...args: K) => void;
    onFail?: (err: any, ...args: K) => void;
    onStart?: () => void;
  } = {}
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const execute = async (...args: K) => {
    try {
      setIsLoading(true);
      setIsFailed(false);
      onStart?.();
      const res = await cb(...args);
      onSuccess?.(res, ...args);
      setIsLoading(false);
    } catch (err) {
      onFail?.(err, ...args);
      setIsLoading(false);
      setIsFailed(true);
    }
  };

  return { execute, isLoading, isFailed };
};
