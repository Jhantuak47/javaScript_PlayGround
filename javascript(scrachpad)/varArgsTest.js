
var add = function(){
  var i,length,result=0;
  console.log(arguments);
  for(i=0;i<arguments.length;i++){
    result = arguments[i]+result;
  }
  return result;
};

console.log(add(3,3,5,6,7,8,8));
