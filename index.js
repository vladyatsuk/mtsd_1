'use strict'

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
    else {
        const reX = -b / (2 * a);
        const absImX = Math.sqrt(-D) / (2 * a);
        const x1 = `${reX} - ${absImX}i`;
        const x2 = `${reX} + ${absImX}i`;
        console.log(`There are no real roots\nComplex roots:\nx1 = ${x1}\nx2 = ${x2}`);
    }
}
