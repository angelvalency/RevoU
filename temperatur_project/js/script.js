document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celciusSuhu');
    const fahrenheitInput = document.getElementById('fahrenheitSuhu');
    const resultCard = document.getElementById('result');
    const convertButton = document.getElementById('convert');
    const reverseButton = document.getElementById('reverse');
    const resetButton = document.getElementById('reset');

    let isCelsiusToFahrenheit = true;

    function convertTemperature() {
        if (isCelsiusToFahrenheit) {
            const celsius = parseFloat(celsiusInput.value);
            if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9 / 5) + 32;
                fahrenheitInput.value = fahrenheit.toFixed(2);
                resultCard.innerText = `(${celsius}°C x 9 / 5) + 32 is equal to ${fahrenheit.toFixed(2)}°F`;
            } else {
                resultCard.innerText = 'Please enter a valid number for Celsius.';
            }
        } else {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            if (!isNaN(fahrenheit)) {
                const celsius = (fahrenheit - 32) * 5 / 9;
                celsiusInput.value = celsius.toFixed(2);
                resultCard.innerText = `(${fahrenheit}°F - 32) x 5 /9 is equal to ${celsius.toFixed(2)}°C`;
            } else {
                resultCard.innerText = 'Please enter a valid number for Fahrenheit.';
            }
        }
    }

    function resetFields() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        resultCard.innerText = '';
    }

    function reverseConversion() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        resetFields();
        if (isCelsiusToFahrenheit) {
            celsiusText.innerText = 'Celsius';
            fahrenheitText.innerText = 'Fahrenheit';
            celsiusInput.placeholder = 'temperature in Celsius';
            fahrenheitInput.placeholder = 'temperature in Fahrenheit';
        } else {
            celsiusText.innerText = 'Fahrenheit';
            fahrenheitText.innerText = 'Celsius';
            celsiusInput.placeholder = 'temperature in Fahrenheit';
            fahrenheitInput.placeholder = 'temperature in Celsius';
        }
    }

    convertButton.addEventListener('click', convertTemperature);
    resetButton.addEventListener('click', resetFields);
    reverseButton.addEventListener('click', reverseConversion);
});
