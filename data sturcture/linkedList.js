
//! ---------- single LL -------------------

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }


// }



//! ---------- double LL -------------------


class Node{
    constructor(value){
        this.value = value;
        this.perv = null;
        this.next = null;
    }
}

class DoubleList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){                             //* adding an element or node at the end of a data structure
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value){                          //* adding an element or node at the beginning or front of a data structure
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

}

const dll = new DoubleList();
dll.append(2)
dll.append(3)
dll.append(4)
dll.append(5)
dll.append(7)

dll.prepend(21)
dll.prepend(32)
dll.prepend(44)
dll.prepend(55)
dll.prepend(76)

dll.print()