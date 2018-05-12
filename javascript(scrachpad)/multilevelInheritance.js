function Employee(name){
  this.name=name;
};

function Manager(name,dept){
  this.name = name;
  this.dept = dept;
};

var emp = new Employee("jhantu");
var mgr = new Manager("rohit","managering");

//setting property on prototype object of function employee
Employee.prototype.getName = function(){
  return this.name;
}
//setting property on protype object.
Manager.prototype.getDept = function(){
  return this.dept;
}

console.log("Employee Name = "+emp.getName());
console.log("Manager Department = "+mgr.getDept())
//console.log("before changing the refference Manager Name = "+mgr.getName());

Manager.prototype.__proto__=Employee.prototype;

console.log("AFTER changing the refference Manager Name = "+mgr.getName());
