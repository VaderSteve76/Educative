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
  for(let i = 0; i < windowSize; i++) {
    while(window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    window.push();
  }

  result.push(arr[window[0]]);

  for(let i = windowSize; i < arr.length; i++) {
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


//////////////////////////////////////////////////////

// Search a rotated array (Recursive)
let binarySearch = function(arr, start, end, key) {
  // assuming all keys are unique
  if(start > end) {
    return -1;
  }

  let mid = start + Math.floor((end - start) / 2);

  if(arr[mid] === key) {
    return mid;
  }

  if(arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]) {
    return binarySearch(arr, start, mid - 1, key);
  } else if(arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]) {
    return binarySearch(arr, mid + 1, end, key);
  } else if(arr[end] <= arr[mid]) {
    return binarySearch(arr, mid + 1, end, key);
  } else if(arr[start] >= arr[mid]) {
    return binarySearch(arr, start, mid - 1, key)
  }
  return -1;
}

let binarySearchRotated = function(arr, key) {
  return binarySearch(arr, 0, arr.length - 1, key);
}

let v1 = [6, 7, 1, 2, 3, 4, 5];  
console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
    
let v2 = [4, 5, 6, 1, 2, 3];
console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
console.log("Key(6) found at: " + binarySearchRotated(v2, 6));


// Search a rotated array (Iterative)
let binarySearchRotated = function(arr, key) {
  start = 0;
  end = arr.length - 1;

  if(start > end) {
    return -1;
  }

  while(start <= end) {
    mid = start + Math.floor((end - start) / 2);
  }

  if(arr[mid] == key) {
    return mid;
  }

  if(arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]) {
    end = mid - 1;
  } else if(arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]) {
    start = mid + 1;
  } else if(arr[end] <= arr[mid]) {
    start = mid + 1;
  } else if(arr[start] >= arr[mid]) {
    end = mid - 1;
  } else {
    return -1;
  }
}

let v1 = [6, 7, 1, 2, 3, 4, 5];

console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
    
let v2 = [4, 5, 6, 1, 2, 3];
  
console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
console.log("Key(6) found at: " + binarySearchRotated(v2, 6));
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////

// Find the Smallest Common Number
let findLeastCommonNumber = function(a, b, c) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < a.length && j < b.length && k < c.length) {
    // finding smallest common number
    if(a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }
    // increment iterator for smallest value
    if(a[i] <= b[j] && a[i] <= c[k]) {
      i++;
    } else if(b[j] <= a[i] && b[j] <= c[k]) {
      j++;
    } else if(c[k] <= a[i] && c[k] <= b[j]) {
      k++;
    }
  }
  return -1;
}

let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [1, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////

// Rotate an Array by N Elements
let reverseArray = function(arr, start, end) {
  while(start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let rotateArray = function(arr, n) {
  let len = arr.length;
  // normalize rotations if n > arr size or n is -negative
  n = n % len;
  if(n < 0) {
    // calculate the positive rotations needed
    n = n + len;
  }
  // partition the arr based on rotations 'n'
  // ex: 1, 2, 3, 4, 5 where n = 2.
  // -> 5, 4, 3, 2, 1
  // -> 4, 5, 3, 2, 1
  // -> 4, 5, 1, 2, 3
  reverseArray(arr, 0, len - 1);
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, n, len - 1);
}

let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log("Array Before Rotation");
console.log(arr);

rotateArray(arr, 2);

console.log("Array After Rotation");
console.log(arr);