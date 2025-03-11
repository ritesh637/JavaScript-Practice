
const repoCount = 50


const gameName = new String('ritesh-hc-com')

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ritesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "tailwindcss.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));