const printSegitiga = 5
var string = ""

for(let i = 1; i <= printSegitiga; i++){
    for(let j = 1; j <= i; j++) {
        string += i
    }
    string += `\n`
}
console.log(string)