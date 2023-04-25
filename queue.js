class Queue {
  #storage;
  #front
  #rear
  constructor() {
    this.#storage = {}
    this.#front = 0
    this.#rear = 0
  }

  getStorage() {
    return this.#storage
  }

  reset() {
    if (this.#front === this.#rear) {
      this.#front = 0
      this.#rear = 0
    }
  }

  size() {
    return Math.abs(this.#rear - this.#front)
  }

  add(value) {
    this.reset()
    this.#storage[++this.#rear] = value
  }

  popLeft() {
    this.reset()
    const temp = this.#storage[++this.#front]
    delete this.#storage[this.#front]
    return temp
  }
}

const queue = new Queue()

queue.add(2)
queue.add(3)
console.log(queue.getStorage())
console.log(queue.popLeft())
console.log(queue.size())
console.log(queue.popLeft())
queue.add(3)
console.log(queue.getStorage())
console.log(queue.popLeft())
console.log(queue.size())
console.log(queue.getStorage())

