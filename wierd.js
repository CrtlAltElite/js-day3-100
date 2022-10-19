const cart = [{id:1},{id:3},{id:5}, {id:1}]


// cart.push({id:2})  This would be working in place by editing my og cart
let newcart=cart.slice()  // will make carts action now out of place
console.log(newcart)


const item = {id:1}

console.log(item in cart) // False
console.log({id:1}=={id:1}) //False

console.log(cart[0]==cart[0]) //true but why do we care?

console.log(item.id == {id:1}.id) //true
console.log(cart[0].id==item.id) //true
console.log("-----------")

let myCart1 = [1,2,3,4]
let myCart2 = [1,2,3,4]
let myCart3 = myCart1
console.log(myCart1==myCart2)//false
console.log(myCart1==myCart3)//true
myCart3.push(5)
console.log(myCart3) //have the 5
console.log(myCart1) // have the 5