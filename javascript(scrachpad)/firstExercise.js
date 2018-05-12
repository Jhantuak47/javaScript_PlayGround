   var person = {
    "firstName":"jhantu",
    "lastName":"nandi",
    "getFullName":function(){
      return this.firstName+" "+this.lastName;
   },
    "address":{
        "street":"st 204",
        "city":"dhanbad",
        "state":"jharjkhand"
     },
 "isBelongsTo": function(){
         if(this.address["city"]==="dhanbad"){
              console.log("yes you are from "+ this.address["city"]);
         }
  }
};

  console.log(person.getFullName());
  person.isBelongsTo();