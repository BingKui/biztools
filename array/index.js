const ArrayTools = {
    // 是否是数组
    isArr: (obj) => {
        return obj instanceof Array;
    },
    // 数组去重
    arrRemoveRepeat: (arr) => {
        return [...new Set(arr)];
    },
    // 不定参数，合并数组
    arrMerge: (...args) => {
        let _result = [];
        for (let item in args) {
            _result = [..._result, ...item];
        }
        return _result;
    },
    // 数组合并同时去重
    arrMergeAndRemoveRepeat: (...args) => {
        return this.arrRemoveRepeat(this.arrMerge(args));
    },
    // 数组顺序打乱
    arrUpset: (arr) => {
        return arr.sort(() => {
            return Math.random() - 0.5;
        });
    },
    // 数组最大值，针对数字类型的数组
    arrMax: (arr) => {
        return Math.max.apply(null, arr);
    },
    // 数组最小值，针对数字类型的数组
    arrMin: (arr) => {
        return Math.min.apply(null, arr);
    },
    // 数组和，针对数字类型的数组
    arrSum: (arr) => {
        return arr.reduce((pre, cur) => {
            return pre + cur;
        });
    },
    // 数组平均值，针对数字类型的数组
    arrAvg: (arr) => {
        return this.arrSum(arr) / arr.length;
    },
    // 截取数组
    arrAppoint: (arr, s, e) => {
        return arr.slice(s, e);
    }
};

export default ArrayTools;