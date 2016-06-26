// O(n^2)
function findSmallest(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  return arr.reduce((a, b, i) => Math.min(a,b))
}

function sort(arr) {
  var sortedArr = []
  var length = arr.length

  for (var i = 0; i < length; i++) {
    var smallest = findSmallest(arr)
    sortedArr.push(smallest)
    var smallestIndex = arr.indexOf(smallest)
    arr.splice(smallestIndex, 1)
  }

  return sortedArr
}

console.log(sort([3, 6, 1]))
