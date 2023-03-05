'use strict'

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const isQuadraticEq = (a) => {
    if (a === '0') {
        console.error('Error. \'a\' cannot be 0');
        return false;
    }
    return true;
}

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
const promptValue = async (prompt) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(prompt, (value) => {
            rl.close();
            resolve(value);
        });
    });
};

const validateValue = (value) => {
    if (!/^\d+$/.test(value)) {
        console.error('Error. Value must be a number');
        return false;
    }
    return true;
}

const validateDataFormat = (data) => {
    const format = /^\d+\s\d+\s\d+\r?\n$/;
    return format.test(data);
}


const readValue = async (prompt, validate) => {
    while (true) {
        const value = await promptValue(prompt);
        if (validate(value)) return value;
    }
}

if (process.argv.length === 3) {
    const fileName = process.argv[2];
    const filePath = path.resolve(__dirname, fileName);
    if (!fs.existsSync(filePath)) {
        console.error(`Error. File ${filePath} doesn't exist`);
        process.exit(1);
    }
    const data = fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8');
    if (validateDataFormat(data)) {
        const [a, b, c] = data.trim().split(' ');
        if (a === '0') {
            console.error('Error. \'a\' cannot be 0');
            process.exit(1);
        }
        solveQuadEq(+a, +b, +c);
    } else console.error('Error. Invalid file format')
}

if (process.argv.length === 2) {
    (async () => {
        const a = await readValue('a = ', (value) => validateValue(value) && isQuadraticEq(value));
        const b = await readValue('b = ', validateValue);
        const c = await readValue('c = ', validateValue);
        solveQuadEq(+a, +b, +c);
    })();

}
