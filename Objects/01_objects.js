
// Object.create
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ritesh",
    "full name": "Ritesh ",
    [mySym]: "mykey1",
    age: 18,
    location: "sasaram",
    email: "ritesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "ritesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ritesh@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());