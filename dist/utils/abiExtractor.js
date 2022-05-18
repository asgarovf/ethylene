export var abiFunctionNameExtractor = function (abi) {
    var mainAbi = abi;
    var keys = mainAbi
        .filter(function (item) { return item.type === "function"; })
        .map(function (item) { return item.name; });
    return { keys: keys };
};
export var abiLoadingExtractor = function (abi) {
    var mainAbi = abi;
    var obj = {};
    var keys = mainAbi
        .filter(function (item) { return item.type === "function"; })
        .forEach(function (item) {
        obj[item.name] = false;
    });
    return obj;
};
