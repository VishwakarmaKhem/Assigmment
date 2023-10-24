function bubbleSortDescending(arr) {
    const len = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          // Swap elements if they are in the wrong order (descending order)
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedDescending = bubbleSortDescending(numbers);
  console.log(sortedDescending);
  