var arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

var returnArray = function(arr){
  
  function fibo(n){
    
    if(n==1||n==0){
         arr[n]=n;
         return arr[n];
    }

    else if(arr[n]!=-1)
      return arr[n];
    else
      {
        arr[n]=fibo(n-1)+fibo(n-2);
        return arr[n];
      }
  }
    fibo(5);
    return arr;
};

var arr =  returnArray(arr);
  
  arr.forEach(function(item){
      if(item!=-1)
        console.log(item);
  });