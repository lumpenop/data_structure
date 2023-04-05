
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next;
  }
}

class LinkedList {
  head = null
  size = 0

  insertFirst (data) {
    this.head = new Node(data, this.head)
    this.size ++
  }
  insertLast (data) {
    const node = new Node(data);
    let current
    if (!this.head) this.head = node;
    else  {
      current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.size++
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data)

    let prev, curr
    curr = this.head
    let count = 0;

    while (count < index) {
      prev = curr
      count++
      curr = curr.next
    }
    prev.next = node
    node.next = curr

    this.size++
  }

  removeAt(index) {
    if (index < 0 || index > this.size) return

    let current = this.head
    let previous
    let count = 0

    if (index === 0) this.head = current.next
    else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.size--
  }

  pop() {
    if (this.size === 0) return
    let count = 0
    let prevNode
    let node = this.head
    while (true) {
      if (!node.next) break
      prevNode = node
      node = node.next
    }
    prevNode.next = null
    this.size--
  }

  print() {
    const resultArr = []
    let current = this.head
    while (current) {
      resultArr.push(current.data)
      current = current.next
    }

    console.log(resultArr)
  }
}

const linked = new LinkedList();

linked.insertFirst(2);
linked.insertFirst(1);
linked.insertLast(4)
linked.insertAt(3,2)
linked.print()

linked.pop()
linked.print()

linked.removeAt(2)
linked.print()

console.log(linked)