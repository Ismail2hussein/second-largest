function secondLargest(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  return arr[1];
}
console.log(secondLargest([23, 66, 58, 12, 6])); // Output: 58
console.log(secondLargest([65, 34, 10, 22, 85])); // Output: 65
console.log(secondLargest([67, 22, 49, 12, 80])); // Output: 67
