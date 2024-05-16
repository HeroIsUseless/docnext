# 前端面试题 - vue的双向绑定原理是什么？
* vue2的双向数据绑定是通过数据劫持结合发布者订阅者模式的方式来实现。
通过object.defineProperty来劫持各个属性的setter，getter，在数据变化时发布消息给订阅者，触发相应的监听回调来渲染视图。
* Vue3利用Proxy代理来处理双向数据绑定。可以直接监听对象而非属性，可以直接监听数组的变化。

> Vue2 无法检测 property 的添加或移除。Vue2 不能检测数组元素的变动，修改数组长度也不行。

通俗易懂的前端面试题网站： [https://www.front-interview.com](https://www.front-interview.com)
