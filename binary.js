let array = ["Aleksandar", "Barbara", "Beth", "Christine", "Divna", "Ian", "Irene", "George", "Olga", "Robert", "Trifun"];
let target = "Barbara";

function binaryIta(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (array[mid] === target) {
      return console.log(`${target} found iteratively at position ${mid}`);
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

function binaryRec(array, target, left, right) {
  let mid = Math.floor((left + right)/2)
  if (array[mid] === target) {
    return console.log(`${target} found recursively at position ${mid}`);
  } else if (target < array[mid]) {
    return binaryRec(array, target, left, mid - 1);
  } else {
    return binaryRec(array, target, mid + 1, right)
  }
}

binaryIta(array, target);

binaryRec(array, target, 0, array.length - 1);
