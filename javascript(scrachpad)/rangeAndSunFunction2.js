
 var range = function(start,last){
   var arr = [];
   while(start<=last){
     arr.push(start);
     start++;
   }
   return arr;
 };
 var sum = function(array){
   var total = 0;
   while(array.length>0)
     total += array.pop();
   return total;
 };

  console.log("sum = "+sum(range(1,10)));