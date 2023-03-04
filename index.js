'use strict'

const fs = require('fs');
const path = require('path');

const solveQuadEq = (a, b, c) => {
    const A = (a === 1) ? '' : a;
    const B = (b === 1) ? '' : b;
    console.log(`${A}x^2 + ${B}x + ${c} = 0`);
    const D = b * b - 4 * a * c;
    if (D > 0) {
        const x1 = -(b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        console.log(`x1 = ${x1}\nx2 = ${x2}`);
    }
    else if (D === 0) {
        const x = -b / (2 * a);
        console.log(`x1 = x2 = ${x}`);
    }
    else console.log('There are no real roots');
}

if (process.argv.length === 3) {
    const fileName = process.argv[2];
    fs.readFile(path.resolve(__dirname, fileName), 'utf-8', (err, data) => {
        if (err) throw err;
        const args = data.split(' ');
        solveQuadEq(+args[0], +args[1], +args[2]);
    })
}
