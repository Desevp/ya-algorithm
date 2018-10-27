
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

console.log(insertSort([123, 54, 0 , 123, 3, 6, 1, 0]));
