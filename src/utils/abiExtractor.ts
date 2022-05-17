import { ContractInterface } from "ethers";

export const abiFunctionNameExtractor = (abi: ContractInterface) => {
  const mainAbi: any = abi;
  const keys = mainAbi
    .filter((item: any) => item.type === "function")
    .map((item: any) => item.name);

  return { keys };
};

export const abiLoadingExtractor = (abi: ContractInterface) => {
  const mainAbi: any = abi;
  let obj: any = {};

  const keys = mainAbi
    .filter((item: any) => item.type === "function")
    .forEach((item: any) => {
      obj[item.name] = false;
    });

  return obj;
};
