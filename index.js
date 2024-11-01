let currentAction = '';

function showInput(action) {
    currentAction = action; 
    document.getElementById('input-container').style.display = 'block';
    document.getElementById('user-input').value = ''; 
    document.getElementById('user-input').placeholder = action === 'tip' 
        ? 'Enter subtotal, tip percentage (A, B)' 
        : 'Enter your input';

    const outputParagraph = document.getElementById('output');
    outputParagraph.style.display = 'none'; // Hide output paragraph
    outputParagraph.innerHTML = ''; // Clear previous output
}

function processInput() {
    const inputValue = document.getElementById('user-input').value.trim();
    let outputMessage = ''; 

    if (currentAction === 'reverse') {
        outputMessage = 'Reversed String: ' + inputValue.split('').reverse().join('');
    } 
    else if (currentAction === 'palindrome') {
        const isPalindrome = inputValue === inputValue.split('').reverse().join('');
        outputMessage = `${inputValue} is ${isPalindrome ? '' : 'not '}a palindrome.`;
    } 
    else if (currentAction === 'tip') {
        const [subtotal, tipPercentage] = inputValue.split(',').map(Number);
        if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
            const total = subtotal + (subtotal * (tipPercentage / 100));
            outputMessage = 'Total amount to be paid: $' + total.toFixed(2);
        } 
        else {
            outputMessage = 'Please enter valid numbers for subtotal and tip percentage.';
        }
    }

    const outputParagraph = document.getElementById('output');
    outputParagraph.innerHTML = outputMessage; // Set the output message
    outputParagraph.style.display = 'block'; // Show output paragraph
    document.getElementById('input-container').style.display = 'none'; // Hide input container
}
