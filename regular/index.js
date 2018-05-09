const RegularTools = {
    // 手机号判断
    isPhone: (str) => {
        return /^1[3|4|5|7|8|9|6][0-9]{9}$/.test(str);
    },
    // 固话判断
    isTel: (str) => {
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    },
    // 是否是电话号码，包括手机和固话
    isTellPhone: (str) => {
        return this.isPhone(str) || this.isTel(str);
    },
    // 是否是电子邮箱
    isEmail: (email) => {
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
    },
    // 校验密码强度等级 0 - 4
    pwdLevel: (pass) => {
        let _level = 0;
        if (pass.length < 6) {
            return _level;
        }
        if (/[0-9]/.test(pass)) {
            _level++;
        }
        if (/[a-z]/.test(pass)) {
            _level++;
        }
        if (/[A-Z]/.test(pass)) {
            _level++;
        }
        if (/[\.|-|_|~|,|?|\{|\}|\[|\]|\!|\@|\#|\$|\%]/.test(pass)) {
            _level++;
        }
        return _level;
    }
};