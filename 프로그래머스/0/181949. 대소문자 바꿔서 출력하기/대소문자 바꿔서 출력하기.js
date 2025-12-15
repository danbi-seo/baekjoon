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
    
    const eng = input[0]
    let result = ''
    
    for(let char of eng){
        if(char === char.toUpperCase()){
            result += char.toLowerCase()
        } else {
            result += char.toUpperCase()
        }
    }
    console.log(result)
});