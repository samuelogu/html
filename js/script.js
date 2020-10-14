let person = 'Samuel Ogu'
person = "Peter Obi"
let age = 34
let isTall = true
let is_tall = true
let address = null
let Person = {
    name: "Sochi",
    age: 23,
    isTall: true,
    addresses: [{
        phone: ['07057575757', '765434567'],
        location: {
            country: 'Nigeria',
            state: 'Akwa Ibom'+ ' state'
        }
    }, "No. 12 Edet Akpan Avenue"]
}
let names = [
Person, "Edi"+'diong', "Ima", 6
]
let about = person + " is " + age + " years old"
// console.log(typeof(address))
console.log(Person.addresses[0])
console.log(names[0].addresses[0].phone[1])
console.log(about)
console.log(names[1])