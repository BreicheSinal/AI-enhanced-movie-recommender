async function submitSignup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    messageDiv.textContent = "";

    try {
        const response = await fetch("http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/create_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                pass: password
            })
        });

        const result = await response.json();
        if (result.success) {
            messageDiv.className = "success-message";
            messageDiv.textContent = "User created successfully!";
        } else {
            messageDiv.className = "error-message";
            messageDiv.textContent = result.error || "Error signing up!";
        }
    } catch (error) {
        messageDiv.className = "error-message";
        messageDiv.textContent = "An error occurred. Please try again.";
    }

}