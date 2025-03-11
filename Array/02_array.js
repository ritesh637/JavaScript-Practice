const marvel_heros = ["ritesh", "patna", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("ritesh"))
console.log(Array.from("ritesh"))
console.log(Array.from({name: "ritesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));