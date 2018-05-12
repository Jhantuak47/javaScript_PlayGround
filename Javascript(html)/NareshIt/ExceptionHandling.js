var x = prompt('ENTER YOUR EXPRESSION','500');
  try{
      alert(eval(x));
      alert("successfully executer...");
      alert("Thank you.."); 
  }
  catch(e){

    alert(e);
    document.write(e);
  }
 finally{
     alert("you should enter numeric vlaue");
 }