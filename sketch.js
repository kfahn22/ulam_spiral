// Coding Challeng Ulam Spiral by Daniel Shiffman
// added squares when primes can be expressed as the sum of two squares

let x, y;
let step = 1;
let stepSize = 10;
let numSteps = 1;
let state = 0;
let turnCounter = 1;
let totalSteps;

function isPrime(value) {
    if (value == 1) return false;
    for (let i = 2; i <= sqrt(value); i++) {
        if (value % i == 0) {
            return false;

        }
    }
    return true;
}

function setup() {
    createCanvas(500, 500);
    const cols = width / stepSize;
    const rows = height / stepSize;
    totalSteps = cols * rows;

    x = width / 2;
    y = height / 2;
    background(74, 32, 64);
}

function draw() {
    rectMode(CENTER);

  while (step < totalSteps) {
        if (isPrime(step)) {
            fill(237, 222, 164);
            stroke(237, 222, 164);
            circle(x, y, stepSize * 0.55);
        }
  // also draw a square if the prime number can be expressed as the sum of        // two squares
        if (isPrime(step) && (step - 1) % 4 == 0) {
            //console.log(step);
            fill(159, 107, 160);
            stroke(159, 107, 160);
            square(x, y, stepSize);
            fill(237, 222, 164);
            stroke(237, 222, 164);
            circle(x, y, stepSize * 0.55);
        }

        switch (state) {
            case 0:
                x += stepSize;
                break;
            case 1:
                y -= stepSize;
                break;
            case 2:
                x -= stepSize;
                break;
            case 3:
                y += stepSize;
                break;
        }


        if (step % numSteps == 0) {
            state = (state + 1) % 4;
            turnCounter++;
            if (turnCounter % 2 == 0) {
                numSteps++;
            }
        }
        step++;
    }
}
