# biztools

业务开发过程中整理的方法，分类整理，方便使用，省去再次编写的麻烦，也可按需引入，减少代码的冗余。

# API

## Arr

| 方法名 | 参数 | 返回值 | 描述 | 
| - | - | - | - |
| isArr | Object | Boolean | 返回传入的对象是否是数组 | 
| arrRemoveRepeat | Array | Array | 去除数组中重复的元素 | 
| arrMerge | 不定参数， Array | Array | 合并传入的所有数组 |
| arrMergeAndRemoveRepeat | 不定参数， Array | Array | 合并并去重传入的所有数组 |
| arrUpset | Array | Array | 打乱数组顺序 |
| arrAppoint | Array, startIndex, endIndex | Array | 截取数组，从startIndex开始到endIndex结束 |
| arrMax | Array | Number | 数组最大值，针对数字类型的数组 |
| arrMin | Array | Number | 数组最小值，针对数字类型的数组 |
| arrSum | Array | Number | 数组和，针对数字类型的数组 |
| arrAvg | Array | Number | 数组平均值，针对数字类型的数组 |

## Reg

| 方法名 | 参数 | 返回值 | 描述 | 
| - | - | - | - |
| isPhone | String | Boolean | 返回传入的字符串是否是移动电话 | 
| isTel | String | Boolean | 返回传入的字符串是否固定电话 | 
| isTellPhone | String | Boolean | 是否是电话号码，包括手机和固话 | 
| isEmail | String | Boolean | 是否是电子邮箱 | 
| pwdLevel | String | Number | 校验密码强度等级，0 - 4个等级 | 

## Str

| 方法名 | 参数 | 返回值 | 描述 | 
| - | - | - | - |
| isStr | String | Boolean | 返回传入值是否为字符串 | 
| strTrim | String, type:Number | String | 去除字符串中的空格，type: 1-所有空格  2-前后空格  3-前空格 4-后空格 | 
| strCase | String, type:Number | String | 字符串大小写转换，type: 1-首字母大写 2-首页母小写 3-大小写转换 4-全部大写 5-全部小写 | 
| strRepeat | String, count:Number | String | 字符串循环复制 | 
| strReplace | String, find:String或Array, repeat:String | String | 字符串特殊字符替换 | 
| strCount | String, s:String | Number | 返回一个字符在字符串中出现的次数 | 
| strJoint | Array | String | 字符串拼接 |

## Nav

| 方法名 | 参数 | 返回值 | 描述 | 
| - | - | - | - |
| isWin | null | Boolean | 判断是否是Window平台 | 
| isMac | null | Boolean | 判断是否是Mac平台 | 
| isLunix | null | Boolean | 判断是否是Lunix平台 | 
| isUnix | null | Boolean | 判读是否是Unix平台 | 
| isMobile | null | Boolean | 判断平台（PC和移动） | 
| isAndroid | null | Boolean | 判断是否是安卓设备 | 
| isiPhone | null | Boolean | 判断是否是iPhone | 
| isiPad | null | Boolean | 判断是否是iPad | 
| isiPod | null | Boolean | 判断是否是iPod | 
| isIE | null | Boolean | 判断是否是ie浏览器 | 
| isEdge | null | Boolean | 判断是否是Edge浏览器 | 
| isFirefox | null | Boolean | 判断是否是Firefox浏览器 | 
| isChrome | null | Boolean | 判断是否是Chrome浏览器 | 
| isOpera | null | Boolean | 判断是否是Opera浏览器 | 
| isSafari | null | Boolean | 判断是否是Safari浏览器 | 
| isWechatBrowers | null | Boolean | 判断是否是微信浏览器 | 
| isUC | null | Boolean | 判断是否是UC浏览器 | 