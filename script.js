// Get the output element
const output = document.getElementById("output");

// Initial array
const numbers = [1, 2, 3, 4];

// Function to simulate async promise with delay
function delayedPromise(data, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), delay);
    });
}

// Start the promise chain
delayedPromise(numbers, 2000)  // Increase delay to 2000ms
    .then((data) => {
        // First transformation: Filter even numbers
        const evenNumbers = data.filter(num => num % 2 === 0);
        return delayedPromise(evenNumbers, 2000);  // Increase delay to 2000ms
    })
    .then((evenNumbers) => {
        // Show filtered even numbers
        output.textContent = evenNumbers.join(", ");
        return delayedPromise(evenNumbers.map(num => num * 2), 2000);  // Keep delay as 2000ms
    })
    .then((doubledNumbers) => {
        // Show even numbers multiplied by 2
        output.textContent = doubledNumbers.join(", ");
    });