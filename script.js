
// Сортировка пузырьком
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Сортировка выбором
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let minIndex = i;
    let j = i;
    while (j < arr.length) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      j++;
    }

    if (arr[i] > arr[minIndex]) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Сортировка вставками
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        const temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
      else {
        break;
      }
    }
  }
  return arr;
}

// Обход дерева

class  Node {
  constructor(value, leftNode, rightNode) {
    this.value = value;
    this.left = leftNode;
    this.right = rightNode;
  }
}


const testNode_A = new Node('A',new Node('B', new Node('C'), new Node('D')), new Node('E', new Node('F', new Node('G'), new Node ('H'))));

function treeSearch(node, callback) {
  if (node) {
    treeSearch(node.left, callback);
    if (node) {
      callback(node);
    }
    treeSearch(node.right, callback);
  }
}

const printNodeValue = (node) => {
  console.log(node.value);
}

treeSearch(testNode_A, printNodeValue);
