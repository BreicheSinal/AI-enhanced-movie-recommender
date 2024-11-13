// // On page load, verify session using auth.php
// window.onload = async function() {
//     try {
//         const response = await fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/auth.php', {
//             method: 'GET',
//             credentials: 'include'  // This ensures cookies are sent with the request
//         });
//         const result = await response.json();
        
//         if (!result.success) {
//             // If not authenticated, redirect to login page
//             alert(result.error || 'Session expired. Redirecting to login.');
//             window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
//         } else {
//             document.getElementById("welcomeMessage").textContent = `Welcome, ${result.username}`;
//         }
//     } catch (error) {
//         console.error('Error verifying session:', error);
//         alert('An error occurred. Please log in again.');
//         window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
//     }
// };


document.getElementById("logoutButton").addEventListener("click", async function() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_type");

    try {
        const response = await fetch("http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/logout.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'  
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
    // Redirect the user to logout.php to clear the session
    
    localStorage.clear();
    window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
});