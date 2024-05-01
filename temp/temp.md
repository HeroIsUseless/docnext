# 前端面试题 - 如何实现promise？

* 通过构造函数生成一个promise对象，该构造函数有一个延时函数参数
* 通过promise.then()或promise.catch()方法实现结果获取
* then函数和catch函数可以链式调用

```js
function MyPromise(func) {
    this.status = 'pending';
    this.res = '';
    this.thenCbs = [];
    this.catchCbs = [];
    const resolve = (data) => {
        this.status = 'fulfilled';
        this.res = data;
        this.thenCbs.forEach(cb => {
            cb(this.res);
        });
    }
    const reject = (data) => {
        this.status = 'rejected';
        this.res = data;
        this.catchCbs.forEach(cb => {
            cb(this.res);
        });
    }
    this.then = function (cb) {
        if (this.status == 'pending') {
            this.thenCbs.push(cb);
        }
        if (this.status == 'fulfilled') {
            var res = cb(this.res)
        }
        return this;
    }
    this.catch = function (cb) {
        if (this.status == 'pending') {
            this.catchCbs.push(cb)
        }
        if (this.status == 'rejected') {
            var res = cb(this.res)
        }
        return this;
    }
    func(resolve, reject)
}
```

通俗易懂的前端面试题网站： [https://www.front-interview.com](https://www.front-interview.com)