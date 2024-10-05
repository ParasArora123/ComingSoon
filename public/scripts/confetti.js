// Check if URL contains status=success in the query parameters
const urlParams = new URLSearchParams(window.location.search);
const statusParam = urlParams.get('status');

if (statusParam === 'success') {
    // Show a success message (if you have one)
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Email saved successfully!';
    responseMessage.style.display = 'block';

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}