document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.getElementById("signin-btn");
    const logoutButton = document.getElementById("logoutButton");

    if (localStorage.getItem("user_id")) {
        signInButton.style.display = "none";
        logoutButton.style.display = "block";
    }

    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_type");

        signInButton.style.display = "block";
        logoutButton.style.display = "none";

        window.location.href = "http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html"; 
    });
});


async function submitLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
    
    messageDiv.textContent = "";

    try {
        const response = await fetch("http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                pass: password
            })
        });

        const result = await response.json();
        if (result.success) {

            console.log(result);
            localStorage.setItem("user_id", result.id);
            localStorage.setItem("user_type", result.user_type);
            
            window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/index.html?id=${result.id}`;
            messageDiv.className = "success-message";
            messageDiv.textContent = "User logged successfully!";
        } else {
            messageDiv.className = "error-message";
            messageDiv.textContent = result.error || "Error logging in!";
            console.log(username + " logged successfully!");
        }
    } catch (error) {
        messageDiv.className = "error-message";
        messageDiv.textContent = "An error occurred. Please try again.";
    }
}