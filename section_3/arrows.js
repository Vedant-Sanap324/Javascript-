const user={
    username:"vedant",
    price:999,
    welcomemsg:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//console.log(this)//-->this will give empty object{}


//const addtwo=(num1,num2)=>{
  //  return num1+num2
//}
//console.log(addtwo(3,4))
const addtwo=(num1,num2)=>num1+num2
console.log(addtwo(3,5))//implicit return method