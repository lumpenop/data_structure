
const binary = (number, arr=[]) => {
  if (number === 0) {
    let result = ""
    const len = arr.length
    for(let i=0; i<len; i++) {
      result += arr.pop()
    }
    return result
  }
  const quotient = Math.floor(number / 2)
  const remainder = number % 2

  arr.push(remainder)

  return binary(quotient, arr)
}

console.log(binary(10))
