<?php
session_start();
session_unset(); // Remove all session variables
session_destroy();
header("Location: http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/login.php");
exit;
?>