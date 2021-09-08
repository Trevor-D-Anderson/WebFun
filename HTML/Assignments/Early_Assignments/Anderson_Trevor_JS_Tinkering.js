var arr = [];
arr.push(1,2,3);
var temp1 = arr[0];
var temp2 = arr[arr.length-1];
arr[0] = temp2;
arr[arr.length-1] = temp1;

console.log(arr)