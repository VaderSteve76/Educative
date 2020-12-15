// Find Maximum in Sliding Window

let findMaxSlidingWindow = function(arr, windowSize) {
  let result = [];

  if(arr.length == 0) {
    return result;
  }

  if(windowSize > arr.length) {
    return result;
  }

  let window = [];
  // find max for first window
  for(let i=0; i < windowSize; i++) {
    while(window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    window.push();
  }

  result.push(arr[window[0]]);

  for(let i=windowSize; i < arr.length; i++) {
    // remove all #'s that are smaller than current # from the tail
    while(window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    // remove first # if it doesn't fall in the window anymore
    if(window.length > 0 && (window[0] <= i - windowSize)) {
      window.shift();
    }
    window.push(i);
    result.push(arr[window[0]]);
  }
  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max =" + findMaxSlidingWindow(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];
console.log("Array = " + array);
console.log("Max =" + findMaxSlidingWindow(array, 3));
//////////////////////////////////////////////////////