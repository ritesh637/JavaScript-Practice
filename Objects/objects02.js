
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "ritesh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ritesh",
            lastname: "Kumar"
        }
    }
}



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2}



const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

users[1].email


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ritesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

[
    {},
    {},
    {}
]
