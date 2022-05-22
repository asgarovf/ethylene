import { Block } from "@ethersproject/providers";
export declare const useBlock: (blockNumber: number, { onSuccess, }?: {
    onSuccess?: ((blockNumber: Block) => void) | undefined;
}) => {
    fetchBlock: () => Promise<void>;
};
//# sourceMappingURL=useBlock.d.ts.map