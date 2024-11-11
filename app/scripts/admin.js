fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_users.php', {
    credentials: 'include'
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        const table = document.getElementById('usersTable');
        data.users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${user.username}</td><td>${user.email}</td><td>${user.user_type}</td>`;
            table.appendChild(row);
        });
    } else {
        alert(data.error);
    }
});