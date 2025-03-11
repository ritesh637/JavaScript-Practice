

const mySym = Symbol("key1")


const JsUser = {
    name: "ritesh",
    "full name": "ritesh ",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ritesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "ritesh@chatgpt.com"

JsUser.email = "ritesh@microsoft.com"


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());