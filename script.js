console.log("Hello from javascript land.")

//============================================
// Fizz Buzz
//============================================

console.log(`==================== Fizz Buzz ====================`);

// Test numbers 1-100
for (let n = 1; n <= 100; n++) {

    // Divisible by 3?
    let divis3 = (n % 3 === 0);

    // Divisible by 5?
    let divis5 = (n % 5 === 0);

    // Divisible by both 3 and 5?
    let divis3and5 = divis3 && divis5;

    // Output the appropriate message
    if (divis3and5)
        console.log(`(n=${n}) Fizz Buzz`);
    else if (divis3)
        console.log(`(n=${n}) Fizz`);
    else if (divis5)
        console.log(`(n=${n}) Buzz`);
    else
        // console.log(`(n=${n}) No fizz or buzz`);
    ;
}

//=========================================
// Prime number check
//=========================================

console.log(`==================== Prime Number Check ====================`);

// Fact: Next prime after 105 is 107
n = 727;

// Start looking for prime numbers upwards from n
let nextNumToCheckIfPrime = n + 1;

console.log(`Searching for a prime number higher than ${n}, starting with ${nextNumToCheckIfPrime}`);

/* keep looking until we find a prime number */
primeNumSearch: while(true) {

    // Start looking for a divisor less than current number
    let testDivisor = nextNumToCheckIfPrime - 1;

    // output debug message
    // console.log(`Testing divisor ${testDivisor} to see if ${nextNumToCheckIfPrime} is prime`);
    
    // Only need to test divisors 2 and higher
    while ((testDivisor > 1) && (nextNumToCheckIfPrime % testDivisor !== 0)) {
        testDivisor--;

        // output debug message
        // console.log(`Testing divisor ${testDivisor} to see if ${nextNumToCheckIfPrime} is prime`);
    }

    // If we found a prime number
    if (testDivisor == 1) {
        console.log(`Next prime number after ${n} is ${nextNumToCheckIfPrime}`);
        break primeNumSearch;
    } else {
        // console.log (`${nextNumToCheckIfPrime} is not prime.  Checking ${nextNumToCheckIfPrime+1}`);
        
        // Keep looking upwards
        nextNumToCheckIfPrime++;
    }
}

//=========================================
// Feeling Loopy Using Arrays
//=========================================

console.log(`==================== Feeling Loopy Using Arrays Part 1 ====================`);
// debugger;

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cellArray = [``,``,``,``];
let cellNum = 0;
let lastLineOutput = false;

/* Loop through every character */
for (const c of csvData) {

    /* Look for new line sequence */
    if (c === `\n`) {
        console.log(cellArray[0], cellArray[1], cellArray[2], cellArray[3]);
        
        for (i = 0; i < cellArray.length; i++)
            cellArray[i] = ``;

        cellNum = 0;
        lastLineOutput = true;
        continue;
    }

    /* Look for comma, if so advance to next cell */
    if (c === `,`) {
        cellNum++;
        continue;
    }
    
    /* Add character to end of current cell */
    cellArray[cellNum] += c;
    lastLineOutput = false;
}

if (!lastLineOutput)
    console.log(cellArray[0], cellArray[1], cellArray[2], cellArray[3]);

console.log(`==================== Feeling Loopy Using Arrays Part 2 ====================`);
// debugger;

const csvData2 = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cellArray2 = [``,``,``,``];
let cellNum2 = 0;
let lastLineOutput2 = false;

/* Loop through every character */
for (const c of csvData2) {

    /* Look for new line sequence */
    if (c === `\n`) {
        console.log(cellArray2[0], cellArray2[1], cellArray2[2], cellArray2[3]);
        
        for (let i = 0; i < cellArray2.length; i++)
            cellArray2[i] = ``;

        cellNum2 = 0;
        lastLineOutput2 = true;
        continue;
        }

    /* Look for comma, if so advance to next cell */
    if (c === `,`) {
        cellNum2++;
        continue;
    }
    
    /* Add character to end of current cell */
    cellArray2[cellNum2] += c;
    lastLineOutput2 = false;
}

if (!lastLineOutput2)
    console.log(cellArray2[0], cellArray2[1], cellArray2[2], cellArray2[3]);


/*  ===================================================================================
    Part 2 - Expanded Functionality
    (Feeling Loopy with 2-Dimensional Array)
    ===================================================================================
*/

console.log(`==================== Part 2 - Expanded Functionality (Feeling Loopy with 2-Dimensional Array)  ====================`);

let part2CellArray = [];

/* Start a new scope for this exercise */
{
    const variableCsvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

    /* Initialize all variables */
    let workingRow = [];
    let workingCell = '';
    let maxColumns = 1;
    let maxRows = 0;
    let endOfFile = variableCsvData.length - 1;

    for (let n = 0; n < variableCsvData.length; n++) {

        let c = variableCsvData[n];

        /* Look for new line sequence or end of file */
        if ((c === `\n`) || (n === endOfFile)) {

            /* If end of file add last character found */
            if (n === endOfFile)
                workingCell += c;

            /* Display # columns found */
            if (maxRows == 0)
                console.log(`Number of columns discovered = ${maxColumns}`);

            /* Add last cell we were working on to the current row, and add the row to the array */
            workingRow.push(workingCell);
            part2CellArray.push(workingRow);

            /* Debug message */
            // console.log(`pushing cell ${workingCell} onto row = ${workingRow}`);

            /* Bump row # */
            maxRows++;
            workingRow = [];
            workingCell = ``;
            continue;
        }

        /* Look for comma, if so advance to next cell */
        if (c === `,`) {

            /* If we are looking at the top row of the CSV, we are counting columns */
            if (maxRows === 0)
                maxColumns++;

            /* Add cell to current row */
            workingRow.push(workingCell);

            /* Output the whole row to the console */
            // console.log(`pushing cell ${workingCell} onto row = ${workingRow}`);

            /* Prepare for processing a new cell */
            workingCell = ``;
            continue;
        }

        /* Add character to end of current cell */
        workingCell += c;
        // console.log(`working cell = ${workingCell}`);    
    }

    /* Console log the whole array */
    console.log('Whole Array is')
    for (let i = 0; i < maxRows; i++) {                 // For each row
        let s = ``;
        for (let j = 0; j < maxColumns; j++) {          // For each column
            s += ` ` + part2CellArray[i][j];
        }
        console.log(s);
    }
}

/*  ===================================================================================
    Part 3 - Transforming Data
    (Feeling Loopy with 2-Dimensional Array)
    ===================================================================================
*/

console.log(`==================== Part 3 - Transforming Data  ====================`);

let part3CellArray = [];

/* Start a new scope for this exercise */
{
    /* Calculate dimenions of part2 array without knowing anything about it */
    let maxRows = part2CellArray.length;
    let maxColumns = part2CellArray[0].length; 

    /* Console log the whole array */
    console.log('Whole Array is')
    for (let i = 0; i < maxRows; i++) {
        let s = ``;
        for (let j = 0; j < maxColumns; j++) {
            s += ` ` + part2CellArray[i][j];
        }
        console.log(s);
    }
}

