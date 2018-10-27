
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

console.log(selectionSort([0,4 , 4353 ,4, 6 ,1 ,0 ,4 ,7 ]));
