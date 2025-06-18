
const fs = require('fs');

let bigBangPredictions = [];

for (let num = 1; num <= 100; num++) {
    
    let result = num.toString(); 
    
    const divisibleBy3 = num % 3 === 0;
    const divisibleBy5 = num % 5 === 0;
    
    if (divisibleBy3 && divisibleBy5) {
        result = "BIGBANG";
    } else if (divisibleBy3) {
        result = "BIG";
    } else if (divisibleBy5) {
        result = "BANG";
    }
    
    bigBangPredictions.push(result);
}

fs.writeFileSync('output.json', JSON.stringify(bigBangPredictions));