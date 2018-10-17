//ES6中不考虑类的继承实现Stack
let Stack = (() => {
    const items = new WeakMap();
    class Stack {
        push (element) {
            items.set(this, element);
        }
        pop () {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
        peek () {
            let s = items.get(this);
            return s[s.length - 1];
        }
        isEmpty () {
            let s = items.get(this);
            return s.length === 0;
        }
        clear () {
            let s = items.get(this);
            s.length = 0;
        }
        size () {
            let s = items.get(this);
            return s.length;
        }
    }
    return Stack;
})();
let stack = new Stack();
stack.push(1);
stack.pop(); //...
