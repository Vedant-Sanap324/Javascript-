//filter function 

const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter( (num)=>{
    return num>4  //scope ki vajah se return use krna pdega nhi  to empty array return hoga output mein
})
console.log(newnums);