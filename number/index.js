const NumberTools = {
    // 是否是数字
    isNum: (obj) => {
        return obj instanceof Number || isNaN(obj);
    },
    // 随机生成 n 位的随机数字
    numRandom: (n) => {
        let _num = '';
        for (let i = 0; i < n; i++) {
            _num += Math.floor(Math.random() * 10) + '';
        }
        return Math.floor(_num);
    },
    // 数字格式化，带小数的保留小数 小数位数 可传 不穿默认不保留
    numFormat: (num, i) => {
        const _num = Math.round(num * 100) / 100;
        const symbol = _num > 0 ? '' : '-';
        const number = Number(num).toString();
        let _result = '';
        if (number.length < 3) {
            _result += number;
        } else {
            const mod = number.length % 3;
            let rs = mod === 0 ? '' : number.substring(0, mod);  
            for (let i = 0; i < Math.floor(number.length / 3); i++) {  
                if ((mod === 0) && (i === 0)) {
                    rs += number.substring(mod + 3 * i, mod + 3 * i + 3);  
                } else {
                    rs += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);  
                }
            }  
            _result += rs;  
        }
    },
    // 数字转中文大写
    num
};

export default NumberTools;