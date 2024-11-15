// Attach an event listener to the "Run Example" button
document.getElementById('runCode').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    const result = greet('JavaScript Learner');
    outputDiv.textContent = result;
});

// Example JavaScript function
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript learning.`;
}