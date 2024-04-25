# 前端面试题 - 元素的innerText outerText innerHTML的区别？

* innerText和outerText取值都是对象起始和结束标签内部的文本内容。但是在设置的时候，outerText会把该标签也替换掉。
* innerHTML取值是对象起始和结束标签内部的html，不包括对象本身的起始标签和结束标签。设置时是填充该标签内部。
* outerHTML取值是也是html，但是包括对象本身的起始标签和结束标签。设置时是连该标签也替换掉。

通俗易懂的前端面试题网站： [https://www.front-interview.com](https://www.front-interview.com)