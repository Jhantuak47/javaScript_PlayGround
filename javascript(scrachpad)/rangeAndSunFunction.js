var myArray = [1,2,3];

var sum = function(array){
  var i,sum = 0;
  for(i=0;i<array.length;i++)
    sum +=array[i];
  return sum;
};

var range = function(first,last){
  var i;
  for(i=0;first<=last;i++){
    myArray[i]=first;
    first++;
  }
  return myArray;
};
var printArray = function(item){
  console.log(item);
};
range(10,15);
myArray.forEach(printArray);
console.log("sum = "+sum(range(10,15)));

