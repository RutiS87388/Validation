function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const resultElement = document.getElementById('result');

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 8;

    const noRepeatingChars = !(/(.)\1\1/.test(password)); 
    const noSequences = !/(abc|123|xyz)/i.test(password); 

    if (hasLowerCase && hasUpperCase && hasSpecialChar && hasDigit && hasMinLength && noRepeatingChars && noSequences) {
        resultElement.textContent = "Password is strong! well done!!!!!!! ruti";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Password is weak! try again!!!!!! ruti ";
        resultElement.style.color = "red";
    }
}
