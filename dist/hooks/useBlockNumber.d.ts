/// <reference types="react" />
export declare const useBlockNumber: ({ direct, deps, onSuccess, }?: {
    direct?: boolean | undefined;
    deps?: any[] | undefined;
    onSuccess?: ((blockNumber: number) => void) | undefined;
}) => {
    fetchBlockNumber: () => Promise<void>;
    blockNumber: number | null;
    setBlockNumber: import("react").Dispatch<import("react").SetStateAction<number | null>>;
};
//# sourceMappingURL=useBlockNumber.d.ts.map