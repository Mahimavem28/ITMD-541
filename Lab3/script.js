// Select necessary elements
const billAmount = document.getElementById('billAmount');
const tipRange = document.getElementById('tipRange');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalWithTip = document.getElementById('totalWithTip');
const currency = document.getElementById('currency');
const conversionRate = document.getElementById('conversionRate');
const errorMessage = document.getElementById('errorMessage');

// Conversion rates
const conversionRates = {
    USD: 1,       // 1 USD = 1 USD
    JPY: 149.34   // 1 USD = 149.4 Yen
};

// Event listeners for input changes
billAmount.addEventListener('input', calculateTip);
tipRange.addEventListener('input', updateTipPercentage);
currency.addEventListener('change', calculateTip); // Update when currency changes

// Update the Tip Percentage value as the slider moves
function updateTipPercentage() {
    tipPercentage.value = `${tipRange.value}%`;
    calculateTip();
}

// Calculate the tip and total amounts, with currency conversion
function calculateTip() {
    const billValue = parseFloat(billAmount.value);
    const tipValue = parseFloat(tipRange.value);
    const selectedCurrency = currency.value;
    const rate = conversionRates[selectedCurrency];

    // Validate the input
    if (isNaN(billValue) || billValue < 0) {
        errorMessage.textContent = 'Please enter a valid positive number for the bill.';
        clearFields();
        return;
    } else {
        errorMessage.textContent = '';
    }

    // Calculate Tip and Total in USD
    const calculatedTip = (billValue * tipValue) / 100;
    const totalBill = billValue + calculatedTip;

    // Convert amounts based on selected currency
    const convertedTip = (calculatedTip * rate).toFixed(2);
    const convertedTotal = (totalBill * rate).toFixed(2);

    // Update the disabled fields with results
    tipAmount.value = `${getCurrencySymbol(selectedCurrency)}${convertedTip}`;
    totalWithTip.value = `${getCurrencySymbol(selectedCurrency)}${convertedTotal}`;
}

// Helper function to get the currency symbol
function getCurrencySymbol(currency) {
    return currency === 'JPY' ? '¥' : '$';
}

// Clear output fields if the input is invalid
function clearFields() {
    tipAmount.value = '';
    totalWithTip.value = '';
}
