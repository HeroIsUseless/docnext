# 前端面试题 - null是原始类型，但为什么typeof null的结果是object？

造成这个结果的原因是null的内存地址是以000开头，而js会将000开头的内存地址视为object。
通过`isNull()`来判断一个值是不是null类型，但值得注意的是`isNaN()`会进行隐式转换。
typeof 无法精确的检测null、Object、Array。获取精确类型的话，可以自己写一个：
```js
const getType = (value: any) => {
  const str: string = Object.prototype.toString.call(value)
  const typeStrArray = str.substring(1, str.length - 1).split(' ')
  return typeStrArray[1].toLowerCase()
}
```

通俗易懂的前端面试题网站： [https://www.front-interview.com](https://www.front-interview.com)
