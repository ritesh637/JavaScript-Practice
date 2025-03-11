const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

let val1;

val1 = null ?? 10 ?? 20

console.log(val1);

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")