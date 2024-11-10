async function submitLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // to reset message
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
            // Redirect to the next page with id as a URL parameter
            // window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/home.html?id=${result.id}`;
            window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/home.html`;
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