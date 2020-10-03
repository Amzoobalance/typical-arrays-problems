
exports.min = function min(array) {
  if (array === undefined || array.length === 0) {

    return 0
  }
  let minValue = Infinity
  for (let num of array) {
    if (minValue > num) {
      minValue = num
    }
  }
  return minValue
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
    return 0
  }
  let maxValue = -Infinity
  for (let num of array) {
    if (maxValue < num) {
      maxValue = num
    }
  }
  return maxValue
}

exports.avg = function avg(array) {
  let sum = 0
  if (array === undefined || array.length === 0) {
    return 0
  }
  for (let num of array) {
    sum = sum + num
  }
  return sum / array.length
}
