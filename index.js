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

const validateValue = (value) => {
    if (!/^-?(?!0\d)\d+(\.\d+)?$/.test(value)) {
        console.error('Error. Value must be a number');
        return false;
    }
    return true;
}

const validateA = (a) => {
    if (/^0*(\.0+)?$/.test(a)) {
        console.error('Error. \'a\' cannot be 0');
        return false;
    }
    else if (!validateValue(a)) return false;
    return true;
}

const validateDataFormat = (data) => {
    const format = /^-?(?!0\d)\d+(\.\d+)?\s-?(?!0\d)\d+(\.\d+)?\s-?(?!0\d)\d+(\.\d+)?\r?\n$/
    return format.test(data);
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
        if (!validateA(a)) {
            process.exit(1);
        }
        solveQuadEq(+a, +b, +c);
    } else console.error('Error. Invalid file format')
}

if (process.argv.length === 2) {
    const args = ['a', 'b', 'c'];
    const argsValues = [];
    process.stdout.write(`${args[0]} = `)
    process.stdin.on('data', (data) => {
        const value = data.toString().replace(/\r\n|\n/g, '');
        if (argsValues.length < args.length) {
            if (argsValues.length === 0 && validateA(value)) {
                argsValues.push(value);
                process.stdout.write(`${args[argsValues.length]} = `);
            } else if (argsValues.length > 0 && validateValue(value)) {
                argsValues.push(value);
                if (argsValues.length < args.length) {
                    process.stdout.write(`${args[argsValues.length]} = `);
                } else {
                    solveQuadEq(+argsValues[0], +argsValues[1], +argsValues[2]);
                    process.exit();
                }
            } else {
                process.stdout.write(`${args[argsValues.length]} = `);
            }
        }
    });
}
