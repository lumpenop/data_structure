class Stack {
  #store
  constructor() {
    this.#store = []
  }

  push(value) {
    this.#store.push(value)
  }

  pop() {
    return this.#store.pop()
  }

  peek() {
    const store = this.#store
    return store[store.length - 1]
  }
}

const stack = new Stack()

console.log(stack.peek())
