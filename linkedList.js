function LinkedList () {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }; //定义链表中单个节点
    let length = 0; //定义链表长度
    let head = null; //定义链表第一项
    this.append = function (element) {
        let node = new Node(element);
        let curNode;
        if (head == null) {
            head = node;
        } else {
            curNode = head;
            while (curNode.next) {
                curNode = curNode.next;
            }
            curNode.next = node;
        }
        length++;
    }; //向链表末尾添加一项
    this.removeAt = function (position) {
        //检查越界值
        if (position > -1 && position < length) {
            let curNode = head;
            let preNode;
            let index = 0;
            if (position === 0) {
                head = curNode.next;
            } else {
                while (index++ < position) {
                    preNode = curNode;
                    curNode = curNode.next;
                }
                preNode.next = curNode.next;
            }
            length--;
            return curNode.element;
        }
    }; //删除特定位置的某项
    this.insert = function (position, element) {
        let node = new Node(element);
        let curNode = head;
        let preNode;
        let index = 0;
        if (position >= 0 && position <= length) {
            if (position === 0) {
                head = node;
                node.next = curNode;
            } else {
                while (index++ < position) {
                    preNode = curNode;
                    curNode = curNode.next;
                }
                preNode.next = node;
                node.next = curNode;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }; //将元素添加到指定位置
    //其他方法
}
