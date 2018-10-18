function Queue () {
    let items = []; //初始化用来存储队列元素的数组
    this.enqueue = function (element) {
        items.push(element); //向队列底部添加元素
    };
    this.dequeue = function () {
        return items.shift(); //移除顶部的一个元素并返回该元素
    };
    this.front = function () {
        return items[0]; //仅返回顶部的第一个元素
    };
    this.isEmpty = function () {
        return items.length === 0; //判断队列是否为空
    };
    this.size = function () {
        return items.length; //查看队列的长度
    };
}
//实例化
let queue = new Queue();
queue.isEmpty(); //true
queue.enqueue(2); //添加元素2
queue.size(); //1
queue.dequeue(); //返回元素2
//使用es6语法实现队列
let Queue2 = (function () {
    const items = new WeakMap();
    class Queue2 {
        constructor () {
            items.set(this, []);
        }
        enqueue (element) {
            let q = items.get(this);
            q.push(element); //向队列底部添加元素
        }
        dequeue () {
            let q = items.get(this);
            let t = q.shift();
            return t; //移除顶部的一个元素并返回该元素
        }
        front () {
            let q = items.get(this);
            return q[0]; //仅返回顶部的第一个元素
        }
        isEmpty () {
            let q = items.get(this);
            return q.length === 0; //判断队列是否为空
        }
        size () {
            let q = items.get(this);
            return q.length; //查看队列的长度
        }
    }
    return Queue2;
})();
//优先队列
function PriorityQueue () {
    let items = [];
    function QueueElement (element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority); //创建元素对象
        let added = false;
        items.forEach((item, index) => {
            if (queueElement.priority < item.priority) {
                items.splice(index, 0, queueElement);
                added = true;
                return false;
            }
        }); //遍历整个队列，找出优先级比queueElement低的元素，并把queueElement插在该元素前面，终止遍历
        if (!added) {
            items.push(priority);
        }
    };
    //其他方法
}
//循环队列----击鼓传花
function hotPotato (nameList, num) {
    if (!(nameList instanceof Array)) {
        throw new Error('请第一个参数应为数组nameList');
    }
    if (typeof num !== 'number') {
        throw new Error('第二个参数应为数字');
    }
    let queue = new Queue(); //初始化队列
    nameList.forEach(item => {
        queue.enqueue(item);
    });
    let eliminated = ''; //初始化被淘汰的人
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue(); //每轮被淘汰的人
        console.log(eliminated + ' is out');
    }
    let winner = queue.dequeue();
    console.log('winner is ' + winner);
}
let nameList = [1, 2, 3, 4, 5, 6, 7];
let num = 5;
hotPotato(nameList, num);
// 输出如下：
// 6 is out
// 5 is out
// 7 is out
// 2 is out
// 1 is out
// 4 is out
// winner is 3
