# Quadratic Equation Solver

## Description

This console application solves quadratic equations
using the algorithm based on the discriminant formula.

To use this application you need to install Node.js first: [Download Node.js here](https://nodejs.org/en/)

Once you have done that, you can use the app.

It works in 2 modes:

1. In the interactive mode, user enters values of the coefficients of the equation using console.

### To start interactive mode type in terminal:
```
$ node index.js
```
1. In the non-interactive mode, user enters the path to the file
that contains the values of the coefficients of the equation.

### To start interactive mode type in terminal:
```
$ node index.js <path>
```
## Required input format

### Both modes

There are requirements to input values:

1. Values must be presented only by numbers and decimal dot (.), any other symbols (letters, spaces etc. are not allowed). These values do not meet the requirements: `234.ssss`; `[space]95_`; `qwe11`; `15 d`.

2. Values cannot have unnecessary zeros before decimal dot. Values with decimal dot must have at least 1 number after decimal dot.<br>These values do not meet the requirements: `0015`; `07.13`; `000002.003`; `1.`<br>These values are OK: `0.152`; `13.002`; `2355.00000` 
3. Additionally, the value of `a` cannot be zero: `0`; `000`; `00.0`; `.0000` do not meet the requirements.

### Non-interactive mode

Data in the file must be presented in a special format. There must be 3 numbers which meet the requirements of the input values, separated by a single space, with the endline in the end (LF or CRLF).<br>These are wrong formats (\n and \r\n represent endlines here): 
```
[space]123 5 17\n
```
```
123 5 17   1 \r\n
```
```
123 5 17
```
<br> These are right formats:
```
123 5 17\n
```
or
```
123 5 17\r\n
```
Without showing endline symbol this looks this way:
```
123 5 17

```
To create an endline you can press Enter key.

# Revert commit link
[Revert "Modified function to show complex roots"](https://github.com/vladyatsuk/mtsd_1/commit/b7952d764d25c30315431e8e3f1089e41c9755e4)

