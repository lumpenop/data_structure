
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

function* hotPotato (list, num) {
  const queue = new Queue()

  list.forEach(item => queue.add(item))

  while (queue.size() > 1) {
    for (let i=0; i<num; i++) {
      queue.add(queue.popLeft())
    }
    const eliminated = queue.popLeft()
    console.log(eliminated, '걸림')

    yield queue.getStorage()
  }
  return queue.popLeft()
}
const list = [1, 2, 3, 4]
const num = 3

const potato = hotPotato(list, num);

console.log(potato.next().value)
console.log(potato.next().value)
console.log(potato.next().value)
console.log(potato.next().value, 'winner')



