
  var range = function(start,last){
    var arr=[],
      cnt = start;
    function returnArray(cn){
      if(cn>=last)
         arr.push(cn);
      else{
        arr.push(cn);
      returnArray(++cn);
      }
    }
    returnArray(cnt);
    return arr;
  };

 var sum = function(array){
  
   return array.reduce(function(tot,val){
     return tot+val;
   });
 };
 
 console.log("sum = "+sum(range(1,10)));