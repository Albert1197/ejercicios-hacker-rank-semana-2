'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let curren

process.stdin.on('data', function(inputStdin) { 
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code her
let positivos =  arr. filter (numero => numero >0 ).length/arr.length;
let negativos =  arr. filter (numero => numero <0 ).length/arr.length;
let ceros =  arr. filter (numero => numero ==0 ).length/arr.length;
return console.log (positivos.toFixed(6) +'\n' + negativos.toFixed (6) + '\n' + ceros.toFixed(6));

}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
