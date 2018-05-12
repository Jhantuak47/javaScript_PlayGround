
  var returnArray = function(){
      var a = [-1,-1,-1,-1,-1,-1];
      function fib(n){
        
         if((n===0)||(n===1)){
            a[n] = n;
            return n;
         }
         else if(a[n]!=-1)
           return a[n];
         else
           {
             a[n]=fib(n-1)+fib(n-2);
             return a[n];
           }
       }
    fib(5);
    return a;
  };

  var fibo = returnArray();
  fibo.forEach(function(item){
    console.log(item+" ");
  });

/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/4:5
*/
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/4:6
*/
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/4:6
*/
/*
Exception: SyntaxError: missing ) in parenthetical
@Scratchpad/4:6
*/
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/4:6
*/