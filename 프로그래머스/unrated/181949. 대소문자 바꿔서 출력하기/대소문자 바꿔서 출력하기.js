const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const regExp = /[a-z]/
    let string = '';
    str.split('').map((n) => regExp.test(n) ? string += n.toUpperCase() : string += n.toLowerCase())
    console.log(string)
});