 let a=300
 if (true){
    let a=10
    const b=20
    console.log("INNER: ",a)
}
console.log(a)
//scopes ko 2 type mein dekhe to block scope aur global scope hota hai 
//global saare yha use hoga pr block scope sirf uske andar hi use hoga