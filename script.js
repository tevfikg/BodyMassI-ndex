document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.querySelector('.btn');
    const resultDiv = document.querySelector('.result');

    calculateBtn.addEventListener('click', function() {
        // Get input values
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Check if inputs are valid
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = 'Please enter valid height and weight';
            resultDiv.style.color = '#ff6b6b';
            return;
        }

        // Calculate BMI: weight (kg) / (height (m))²
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmi.toFixed(1);

        // Determine BMI category
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3498db';
        } else if (bmi < 25) {
            category = 'Normal weight';
            color = '#2ecc71';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = '#f39c12';
        } else {
            category = 'Obesity';
            color = '#e74c3c';
        }

        // Display the result in a more SECURE way(For the Security)
        resultDiv.textContent = ''; 
        
        // Create BMI text element
        const bmiText = document.createElement('div');
        bmiText.textContent = 'Your BMI: ' + roundedBMI;
        bmiText.style.color = color;
        bmiText.style.fontWeight = 'bold';
        resultDiv.appendChild(bmiText);
        
        // Create category element
        const categoryText = document.createElement('div');
        categoryText.textContent = category;
        categoryText.style.marginTop = '5px';
        resultDiv.appendChild(categoryText);
    });
});