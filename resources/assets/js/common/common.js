'use strict';
let result = [],
    recursionFlatten = function (datas, column) {
        for (let i in datas) {
            let save = true;
            result.forEach(function (v, k) {
                if (v === datas[i]) save = false;
            });
            if (save) {
                result.push(datas[i]);
            }
            if (Array.isArray(datas[i][column]) && datas[i][column].length > 0) {
                recursionFlatten(datas[i][column], column);
            }
        }
        return result;
    },
    recursionReplaceKey = function (datas, oldKey, newKey) {
        for (let i in datas) {
            if (datas[i][oldKey]) {
                datas[i][newKey] = datas[i][oldKey];
                if (datas[i][oldKey].length > 0) {
                    recursionReplaceKey(datas[i][oldKey], oldKey, newKey);
                }
            }
        }
        return datas;
    },
    randomString = function (len) {
        len = len || 32;
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        let maxPos = $chars.length;
        let pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };


export {
    recursionFlatten,
    randomString,
    recursionReplaceKey
};