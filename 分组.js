// fn回调函数是将arr数组中元素按照规则返回key键

//解法
Array.prototype.grouby = function (fn) {
    const ans = {}
    for (const item of this) {
        const key = fn(item);
        ans.hasOwnProperty(key) ? ans[key].push(item) : (ans[key] = [], ans[key].push(item))
    }
    return ans1
}

//解法二
Array.prototype.grouby = function (fn) {
    const ans = {}
    for (const item of this) {
        key = fn(item);
        (ans[key] ??= []).push(item)
    }
    return ans
}