# BMI (Body Mass Index) Calculator

Calculate BMI based on height (cm) and weight (kg)

## Security Measures Implemented

This project implements several important security best practices:

- **DOM Manipulation vs. innerHTML**: Uses textContent and proper DOM methods instead of innerHTML to prevent XSS (Cross-Site Scripting) vulnerabilities
- **Input Validation**: Validates all user inputs before processing to prevent unexpected behavior
- **Content Security**: Creates DOM elements programmatically rather than parsing HTML strings
- **Numeric Input Types**: Uses type="number" for form inputs to improve validation
- **Event Delegation**: Properly scopes event listeners to prevent memory leaks
- **Clean Styling**: Separates styling concerns from content manipulation

## License

MIT
