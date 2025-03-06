//your JS code here. If required.
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
delayedPromise(numbers, 3000)
    .then((data) => {
        // First transformation: Filter even numbers
        const evenNumbers = data.filter(num => num % 2 === 0);
        return delayedPromise(evenNumbers, 1000);
    })
    .then((evenNumbers) => {
        // Show filtered even numbers
        output.textContent = evenNumbers.join(", ");
        return delayedPromise(evenNumbers.map(num => num * 2), 2000);
    })
    .then((doubledNumbers) => {
        // Show even numbers multiplied by 2
        output.textContent = doubledNumbers.join(", ");
    });

// Let me know if you want me to add a button to trigger the process or modify the logic! 🚀
