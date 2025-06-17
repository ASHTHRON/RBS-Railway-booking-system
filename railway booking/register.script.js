document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsChecked = document.getElementById('terms').checked;

    if (!termsChecked) {
        alert('You must agree to the Terms and Conditions.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Additional form validation or submission logic can be added here

    alert('Registration successful!');
    // Redirect to booking page after successful registration
    window.location.href = 'booking.html';
});
