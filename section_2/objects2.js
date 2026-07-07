//object singleton
//an singleton object is an object that is created only once and can be used throughout the application. It is a design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"} 
//const obj3 = {obj1,obj2}//this is called object composition
//const obj3 = Object.assign({},obj1,obj2)//this is called object composition
obj3={...obj1,...obj2}//this is called object composition//spread operator
console.log(obj3)
