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
    }, "No. 12 Edet Akpan Avenue"],
    todos: [
        {
            title: 'Fix phone screen',
            completed: false
        }
    ],
    search: {
        location: '5m',
    }
}
let names = [
Person, "Edi"+'diong', "Ima", 6
]
let about = person + " is " + age + " years old"
// console.log(typeof(address))
// console.log(Person.addresses[0])
// console.log(names[0].addresses[0].phone[1])
// console.log(about)
// console.log(names[1])

function sayHello(person, age) {
    var greetings = 'Hello ' + person + '!'
    var declearAge = person+'\'s age is '+age
    console.log(greetings+' '+declearAge)
}

function calculateGrade(score) {
    var grade = ''
    if (score >= 70) {
        grade = 'A'
    }else if(score >= 60 && score < 70) {
        grade = 'B'
    }else if(score > 49 && score < 60) {
        grade = 'C'
    }else if(score >= 45 && score < 50) {
        grade = 'D'
    }else {
        grade = 'F'
    }
    isPass(grade)
}

function isPass(grade) {
    let isPass = grade === 'F' ? 'Failed' : 'Pass'

    console.log(isPass)
}

// function calculateGrade(score) {

//     if (score >= 70) {
//         return 'A'
//     }

//     if(score >= 60 && score < 70) {
//         return 'B'
//     }

//     if(score > 49 && score < 60) {
//         return 'C'
//     }

//     if(score >= 45 && score < 50) {
//         return 'D'
//     }

//     return 'F'

// }

// sayHello('James', 38)
// sayHello(person, age)
// sayHello('Blessing Philips', 25)
let score = 67

calculateGrade(score)

