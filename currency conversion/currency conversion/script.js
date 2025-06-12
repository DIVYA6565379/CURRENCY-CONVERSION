const currencies = [
    { code: "USD", name: "United States", symbol: "🇺🇸", rate: 1.0 },
    { code: "EUR", name: "European Union", symbol: "🇪🇺", rate: 0.93 },
    { code: "GBP", name: "United Kingdom", symbol: "🇬🇧", rate: 0.79 },
    { code: "INR", name: "India", symbol: "🇮🇳", rate: 83.10 },
    { code: "AUD", name: "Australia", symbol: "🇦🇺", rate: 1.50 },
    { code: "CAD", name: "Canada", symbol: "🇨🇦", rate: 1.37 },
    { code: "JPY", name: "Japan", symbol: "🇯🇵", rate: 155.30 },
    { code: "CNY", name: "China", symbol: "🇨🇳", rate: 7.25 },
    { code: "BRL", name: "Brazil", symbol: "🇧🇷", rate: 5.12 },
    { code: "MXN", name: "Mexico", symbol: "🇲🇽", rate: 18.10 },
    { code: "ZAR", name: "South Africa", symbol: "🇿🇦", rate: 18.50 },
    { code: "RUB", name: "Russia", symbol: "🇷🇺", rate: 89.50 },
    { code: "KRW", name: "South Korea", symbol: "🇰🇷", rate: 1375.00 },
    { code: "TRY", name: "Turkey", symbol: "🇹🇷", rate: 32.80 },
    { code: "AED", name: "United Arab Emirates", symbol: "🇦🇪", rate: 3.67 },
    { code: "SGD", name: "Singapore", symbol: "🇸🇬", rate: 1.36 },
    { code: "HKD", name: "Hong Kong", symbol: "🇭🇰", rate: 7.82 },
    { code: "NZD", name: "New Zealand", symbol: "🇳🇿", rate: 1.62 },
    { code: "CHF", name: "Switzerland", symbol: "🇨🇭", rate: 0.89 },
    { code: "SEK", name: "Sweden", symbol: "🇸🇪", rate: 10.65 },
];

const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const result = document.getElementById('result');

// Populate dropdowns with country, code, and emoji
function populateCurrencies() {
    currencies.forEach(currency => {
        const optionText = `${currency.symbol} ${currency.name} - ${currency.code}`;

        const option1 = document.createElement('option');
        option1.value = currency.code;
        option1.textContent = optionText;

        const option2 = option1.cloneNode(true);

        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });

    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
}

populateCurrencies();

// Convert currency
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCode = fromCurrency.value;
    const toCode = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        result.innerText = "Please enter a valid amount";
        return;
    }

    const fromRate = currencies.find(c => c.code === fromCode).rate;
    const toRate = currencies.find(c => c.code === toCode).rate;

    const convertedAmount = (amount / fromRate) * toRate;
    result.innerText = `${amount} ${fromCode} = ${convertedAmount.toFixed(2)} ${toCode}`;
}
