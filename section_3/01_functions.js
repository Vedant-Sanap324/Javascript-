//function sayname(){
//}
//this is a function declaration

//function addNumbers(num1, num2){
   // return num1 + num2;
//}
//const result = addNumbers(5, 10);
//console.log(result);

//function loginmsg(username){
  //  return `Welcome ${username} to the application`;
//}
//console.log(loginmsg("Vedant"))
//if the numbers of parameters are not known then we can use rest parameters
function calaculatecart(...num1){
    return num1
}
console.log(calaculatecart(10, 20, 30, 40, 50))//with the help of rest parameter we can storre all the values provided into an array and we can use that array for further operations

    