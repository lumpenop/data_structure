class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right =  null
  }
}


class BinarySearchTree {
  root = null

  insert (key) {
    const newNode = new Node(key)

    if (this.root === null) this.root = newNode
    else this.insertNode(this.root, newNode)
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 중위 순회

  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }


  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }


  // 전위 순회
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }


  // 후위 순회

  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min () {
    return this.minNode(this.root)
  }

  minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }

      return node.key
    }
    return null
  }

  max () {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }

      return node.key
    }
    return null
  }


  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) return false
    if (key < node.key) return this.searchNode(node.left, key)
    if (key > node.right) return this.searchNode(node.right, key)
    return true;
  }

  remove(key) {
    this.root = this.removeNode(root, key)
  }

  removeNode(node, key) {
    if (node === null) return null
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    }
    if (key > node.key) {
      node.right = this.removeNode(node.right, key)
    }

    // 리프 노드
    if (node.left === null && node.right === null) {
      node = null
      return node
    }

    // 자식이 하나인 노드
    if (node.left === null) {
      node = node.right
      return node
    }

    if (node.right === null) {
      node = node.left
      return node
    }

    // 자식이 둘인 노드
    const aux = this.minNode(node.right)
    node.key = aux.key
    node.right = this.removeNode(node.right, aux.key)
    return node
  }

}

