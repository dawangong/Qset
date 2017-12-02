(function (window) {
    function Qset(arr) {
        this.arr=arr||[];
        this.index=0;
    }
    //add() 方法用来向一个Qset对象的末尾添加一个指定的值。
    Qset.prototype.add=function (num) {
        this.arr.push(num);
        return this;
    };
    //clear() 方法用来清空一个Qset对象中的所有元素。
    Qset.prototype.clear=function () {
        this.arr=[];
    };
    //delete() 方法可以从一个Qset对象中删除指定的元素。
    Qset.prototype.delete=function (num) {
        let arrLength=this.arr.length;
        this.arr.splice(num,1);
        if(arrLength<this.arr.length){
            return true;
        }
        else {
            return false;
        }
    };

    //has() 方法返回一个布尔值来指示对应的值value是否存在Qset对象中
    Qset.prototype.has=function (str) {
        for (let i=0;i<this.arr.length;i++){
            if (this.arr[i]==str){
                return true;
            }
            else {
                return false;
            }
        }
    };

    //entries()
    Qset.prototype.entries=function () {
        this.Iterator.arr=this.arr;
        this.Iterator.index=this.index;
        this.Iterator.n=2;
        this.check=true;
        return this.Iterator;
    };

    Qset.prototype.values=function () {
        this.Iterator.arr=this.arr;
        this.Iterator.index=this.index;
        this.Iterator.n=1;
        this.check=false;
        return this.Iterator;
    };

    Qset.prototype.forEach=function () {
        
    };

    Qset.prototype.Iterator={
        value:[],
        next:function () {
            let otherArr=[];
            for (let i=0;i<this.n;i++){
                otherArr.push(this.arr[this.index]);
            }
            this.index++;
            if(this.check==true){
                this.value=otherArr;
            }
            else {
                this.value=otherArr[0];
            }
            return this;
        }
    };


    window.Qset=Qset;
})(window);