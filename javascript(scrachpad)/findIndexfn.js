var array = [2,5,15,7,34,67,7,0];

  var over30 = function(val,index,arrays){
      console.log(val+"--"+index+"--"+arrays);
    
    //predivate function...
        return val>30;
  }
  
  console.log("Index = "+array.findIndex(over30));