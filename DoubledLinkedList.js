class MyNode {
    constructor(value){
        this.value = value
        this.next = undefined
        this.prev = undefined
    }
}


class DoubledLinkedList {
    constructor(equalsFn){
        this.head = undefined
        this.tail = undefined
        this.count = 0
        this.equalsFn = equalsFn
        this.currentPosition = undefined
    }

    /**
     * Insere sempre no fim da lista
     * @param {Node} node 
     */
    insert(node) {
        if(this.count === 0){
            this.head = node
            this.tail = node
            this.count++
        } else {
            let current = this.head
            for(let i = 0 ; i < this.count ; i++) {
                if(current.next){
                    current = current.next
                } else {
                    node.prev = current
                    this.tail = node
                    current.next = node
                    this.count++
                }
            }
        }
    }

    nextValue() {
        if (this.currentPosition === undefined) {
            this.currentPosition = this.head
            return this.currentPosition.value
        } else {
            this.currentPosition = this.currentPosition.next
            return this.currentPosition?.value
        }
    }

    previousValue() {
        if (this.currentPosition === undefined) {
            this.currentPosition = this.tail
            return this.currentPosition.value
        } else {
            this.currentPosition = this.currentPosition.prev
            return this.currentPosition?.value
        }
    }
}

const doubledLinkedListInstance = new DoubledLinkedList()

const node1 = new MyNode(1)
const node2 = new MyNode(2)
const node3 = new MyNode(3)
const node4 = new MyNode(4)
const node5 = new MyNode(5)

doubledLinkedListInstance.insert(node1)
doubledLinkedListInstance.insert(node2)
doubledLinkedListInstance.insert(node3)
doubledLinkedListInstance.insert(node4)
doubledLinkedListInstance.insert(node5)

console.log(doubledLinkedListInstance.nextValue())
console.log(doubledLinkedListInstance.nextValue())
console.log(doubledLinkedListInstance.nextValue())
console.log(doubledLinkedListInstance.nextValue())
console.log(doubledLinkedListInstance.nextValue())
console.log(doubledLinkedListInstance.nextValue())

console.log(doubledLinkedListInstance.previousValue())
console.log(doubledLinkedListInstance.previousValue())
console.log(doubledLinkedListInstance.previousValue())
console.log(doubledLinkedListInstance.previousValue())
console.log(doubledLinkedListInstance.previousValue())
console.log(doubledLinkedListInstance.previousValue())
