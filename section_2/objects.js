//singleton
//Object.create()--> also used to create object-->constructor method


//object literal
const Jsuser = {
    name: 'vedant',
    email: 'vedant@example.com',
    isLoggedIn: true,
    lastLogindays: ['Monday', 'Tuesday'],
    age: 20
}

Jsuser.email='vedant@google.com'//updating the value of email
console.log(Jsuser.email)
//Object.freeze(Jsuser)//freeze the object so that no changes can be made to it
console.log(Jsuser)
Jsuser.greeting= function(){
    console.log(`HELLO JS USER, ${this.name}`);//this is used to access the properties of the object
}
console.log(Jsuser.greeting())//HELLO JS USER, vedant