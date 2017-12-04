### Qset
#### es6中set对象的实现
- 规定接收操作的数组元素是不重复的，通过unique函数去除重复的元素

#### Set对象下的部分属性方法：
- Size：Size属性将会返回Set对象中元素的个数。
- Set.prototype.add()：add() 方法用来向一个 Set 对象的末尾添加一个指定的值。
- Set.prototype.clear()：clear() 方法用来清空一个 Set 对象中的所有元素。
- Set.prototype.delete()：delete() 方法可以从一个 Set 对象中删除指定的元素。
- Set.prototype.has()：has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中
- Set.prototype.forEach()：forEach 方法根据集合中元素的顺序，对每个元素都执行提供的 callback 函数一次。
- Set.prototype.values()： values() 方法返回一个 Iterator  对象，这个对象以插入Set 对象的顺序包含了原 Set 对象里的每个元素。
- Set.prototype.entries()：entries() 方法返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 Map 对象那样拥有 key，然而，为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组。
- Set.prototype[@@iterator]()：The initial value of the @@iterator property is the same function object as the initial value of the values property.
新改动：
- 添加时 重复性确认
- 添加时 size 更新
- 清空时 size 更新
- 删除时 size 更新
- 其他参数输入的错误提醒
