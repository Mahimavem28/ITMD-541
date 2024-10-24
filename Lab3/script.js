// Select necessary elements
const billAmount = document.getElementById('billAmount');
const tipRange = document.getElementById('tipRange');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalWithTip = document.getElementById('totalWithTip');
const errorMessage = document.getElementById('errorMessage');

// Event listeners for input changes
billAmount.addEventListener('input', calculateTip);
tipRange.addEventListener('input', updateTipPercentage);

// Update the Tip Percentage value as the slider moves
function updateTipPercentage() {
    tipPercentage.value = `${tipRange.value}%`;
    calculateTip();
}

// Calculate the tip and total amounts
function calculateTip() {
    const billValue = parseFloat(billAmount.value);
    const tipValue = parseFloat(tipRange.value);

    // Validate the input
    if (isNaN(billValue) || billValue < 0) {
        errorMessage.textContent = 'Please enter a valid positive number for the bill.';
        clearFields();
        return;
    } else {
        errorMessage.textContent = '';
    }

    // Calculate Tip and Total
    const calculatedTip = (billValue * tipValue) / 100;
    const totalBill = billValue + calculatedTip;

    // Update the disabled fields with results
    tipAmount.value = `$${calculatedTip.toFixed(2)}`;
    totalWithTip.value = `$${totalBill.toFixed(2)}`;
}

// Clear output fields if the input is invalid
function clearFields() {
    tipAmount.value = '';
    totalWithTip.value = '';
}
