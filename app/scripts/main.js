// On page load, verify session using auth.php
window.onload = async function() {
    try {
        const response = await fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/auth.php', {
            method: 'GET',
            credentials: 'include'  // This ensures cookies are sent with the request
        });
        const result = await response.json();

        if (result.success) {
            window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
        } else {
            alert("Failed to log out. Please try again.");
        }
    } catch (error) {
        console.error('Error verifying session:', error);
        alert('An error occurred. Please log in again.');
        window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
    }
});


document.getElementById("logoutButton").addEventListener("click", function() {
    window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
});

