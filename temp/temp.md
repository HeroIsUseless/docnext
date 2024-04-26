# 前端面试题 - redux与vuex的区别？

* redux使用的是不可变数据，每次都是用新的state替换旧的state，通过diff算法比较差异的；而Vuex是可变的，通过getter/setter直接修改。
* 另外就是在api上有不同，vuex定义了state，getter，mutation，action；redux定义了state，reducer，action。

通俗易懂的前端面试题网站： [https://www.front-interview.com](https://www.front-interview.com)