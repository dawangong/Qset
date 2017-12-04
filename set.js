(function (window) {
    function unique(arr) {
        let tempArr = [];
        arr.forEach(function (v) {
            if (!tempArr.includes(v)) {
                tempArr.push(v);
            }
        })
    }

    function Qset(arr) {
        this.arr = unique(arr) || [];
        this.size = this.arr.length;
    }

    //add() 方法用来向一个Qset对象的末尾添加一个指定的值。
    Qset.prototype.add = function (num) {
        this.arr.push(num);
        return this;
    };

    //clear() 方法用来清空一个Qset对象中的所有元素。
    Qset.prototype.clear = function () {
        this.arr = [];
    };
    //delete() 方法可以从一个Qset对象中删除指定的元素。
    Qset.prototype.delete = function (num) {
        let arrLength = this.arr.length;
        this.arr.splice(num, 1);
        if (arrLength > this.arr.length) {
            return true;
        }
        else {
            return false;
        }
    };

    //has() 方法返回一个布尔值来指示对应的值value是否存在Qset对象中
    Qset.prototype.has = function (str) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == str) {
                return true;
            }
            else {
                return false;
            }
        }
    };

    Qset.prototype.forEach = function (fn, arg) {
        this.arr.forEach(fn, arg);
    };

    //entries()
    Qset.prototype.entries = function () {
        let index = 0;
        return {
            next: function () {
                index++;
                return {
                    value: this.arr.length > index ? [this.arr.length, this.arr.length] : undefined
                }
            }
        }
    };

    Qset.prototype.values = function () {
        let index = 0;
        return {
            next: function () {
                index++;
                return {
                    value: this.arr.length > index ? this.arr.length : undefined
                }
            }
        }
    };

    Qset.prototype[Symbol.iterator] = function () {
        let index = 0;
        return {
            next: function () {
                index++;
                return {
                    value: this.arr.length > index ? this.arr.length : undefined
                }
            }
        }

    };

    window.Qset = Qset;
})(window);