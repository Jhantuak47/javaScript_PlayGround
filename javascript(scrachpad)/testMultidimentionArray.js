var table = [
    ["r1c1","r1c2","r1c3","r1c4"],
    ["r2c1","r2c2","r2c3","r2c4"],
    ["r3c1","r3c2","r3c3","r3c4"],
    ["r4c1","r4c2","r4c3","r4c4"],
];

/*console.log(table[0][3]);
console.log(table[3][3]);

//printing entire Array....

for(var i = 0;i<table.length;i++){
  for(var j = 0;j<table[i].length;j++){
      console.log(table[i][j]);
  }
}*/

//representing multidimention array using objects...

var table2 = {
  "mammals":["horse","whale","bison","lion"],
  "amphibians":["salamander","frog","toad"],
  "reptiles":["turtle","crocodile","snake","lizard"],
  "fish":["shark","trout","seahorse","eel"]
}

//using for in loop...

for(var item in table2){
  for(let k=0;k<table2[item].length;k++){
    console.log(table2[item][k]);
  }
}