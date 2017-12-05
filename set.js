(function (window) {
    function unique(arr) {
        let tempArr = [];
        arr.forEach(function (v) {
            if (!tempArr.includes(v)) {
                tempArr.push(v);
            }
        });
        return tempArr;
    }

    function Qset(arr) {
        if (arr && !Array.isArray(arr)) {
            throw new Error('参数只能是数组');
        }
        this.arr = arr || [];
        this.arr = unique(this.arr);
        this.size = this.arr.length;
    }

    //add() 方法用来向一个Qset对象的末尾添加一个指定的值。
    Qset.prototype.add = function (num) {
        this.arr.push(num);
        this.arr = unique(this.arr);
        this.size = this.arr.length;
        return this;
    };

    //clear() 方法用来清空一个Qset对象中的所有元素。
    Qset.prototype.clear = function () {
        this.arr = [];
        this.size = this.arr.length;
    };
    //delete() 方法可以从一个Qset对象中删除指定的元素。
    Qset.prototype.delete = function (num) {
        let arrLength = this.arr.length;
        this.arr.splice(num, 1);
        this.size = this.arr.length;
        if (arrLength > this.arr.length) {
            return true;
        }
        else {
            return false;
        }
    };

    //has() 方法返回一个布尔值来指示对应的值value是否存在Qset对象中
    Qset.prototype.has = function (str) {
        if (this.arr.indexOf(str) == -1) {
            return false;
        }
        else {
            return true;
        }
    };

    Qset.prototype.forEach = function (fn, arg) {
        this.arr.forEach(fn, arg);
    };

    //entries()
    Qset.prototype.entries = function () {
        let index = 0;
        return {
            next: () => {
                return {
                    value: this.arr.length > index ? [this.arr[index], this.arr[index++]] : undefined
                }
            }
        }

    };

    Qset.prototype.values = function () {
        let index = 0;
        return {
            next: () => {
                return {
                    value: this.arr.length > index ? this.arr[index++] : undefined
                }
            }
        }

    };

    Qset.prototype[Symbol.iterator] = function () {
        let index = 0;
        return {
            next: () => {
                return {
                    value: this.arr.length > index ? this.arr[index++] : undefined
                }
            }
        }

    };

    window.Qset = Qset;
})(window);