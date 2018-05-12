var fibonacciSeries = function fibonacciSeries(arr,len){
    
  if(arr.length>=len){
    return arr;
  }
  arr.push(arr[arr.length-2]+arr[arr.length-1]);
  return fibonacciSeries(arr,len);
};
console.log(fibonacciSeries([0,1],6));