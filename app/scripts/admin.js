fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_users.php', {
    credentials: 'include'
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        const table = document.getElementById('usersTable');
        data.users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.user_type}</td>
                <td><button class="deleteButton" data-user-id="${user.id}">Delete</button></td>
            `;
            table.appendChild(row);
        });
        
        document.querySelectorAll(".deleteButton").forEach(button => {
            button.addEventListener("click", async function() {
                const userId = this.getAttribute("data-user-id");
                if (confirm("Are you sure you want to delete this user?")) {
                    try {
                        const response = await fetch("http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/delete_user.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ id: userId }) 
                        });

                        const result = await response.json();
                        if (result.success) {
                            alert(result.message);
                            this.closest("tr").remove(); 
                        } else {
                            alert("Failed to delete user: " + result.error);
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        alert("An error occurred. Please try again.");
                    }
                }
            });
        });
    } else {
        alert(data.error);
    }
});
