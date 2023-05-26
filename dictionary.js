class Dictionary {
  items = {}

  has (key) {
    return key in this.items
  }

  set (key, value) {
    this.items[key] = value
  }

  remove (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  getValues () {
    let values = []
    for (let k in this.items) {
      if (this.has(k)) {
        values.push(this.items[k])
      }
    }
  }
}
