//two types of memory storage in javascript are stacka and heap
//stack is used for static memory allocation and heap is used for dynamic memory allocation
//stack-->primitive
//heap-->non-primitive 
let myname="vedant"
anothername=myname
console.log(myname)
console.log(anothername)
let obj1={
    email:"vedant@gmail.com"
}
let obj2=obj1
console.log(obj1)
console.log(obj2)
obj2.email="vvvv@gmail.com"
console.log(obj1)
console.log(obj2)