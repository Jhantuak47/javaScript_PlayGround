var fibonacci = function(arr,len){
    var num1=arr[0],
        num2=arr[1],
        next,
        cnt = 2;
        
        while(cnt<len){
          next = num1+num2;
          num1=num2;
          num2=next;
          arr.push(next);
          cnt++;
        }
    return arr;
};
