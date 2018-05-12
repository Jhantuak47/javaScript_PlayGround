function createPersonObject(){
  var firstName = "Jhantu";
  var lastName = "Nandi";
  
  var returnObject = {
    
      "getFirstName":function(){
        return firstName;
      },
    
      "getLastName":function(){
      return lastName;
      },
      
      "setFirstName":function(Name){
        firstName = Name;
      },
    
      "setlastName":function(Name){
        lastName = Name;
      }
  };
  return returnObject;
}

var person = createPersonObject();
console.log(" Name: "+person.getFirstName()+" "+person.getLastName());

person.setFirstName("Arnab");
person.setlastName("Dutta");

console.log(" Name: "+person.getFirstName()+" "+person.getLastName());