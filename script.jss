const userInput = document.getElementById('userInput');
const displayButton = document.getElementById('displayButton');
const outputDiv = document.getElementById('output');

displayButton.addEventListener('click', () => {
    // INTENTIONAL XSS VULNERABILITY: Directly injecting user input into innerHTML
    outputDiv.innerHTML = userInput.value;
});
