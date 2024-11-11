<?php

include "connection.php";

// Reading POST data sent to the server
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Checking if variables are set in the JSON data
if (isset($data['message']) && isset($data['sender_type'])) {
    $message = $data['message'];
    $senderType = $data['sender_type'];

    // Preparing query
    $query = $conn->prepare("INSERT INTO chat_history (message, sender_type) VALUES (?, ?)");

    // Binding the variables
    $query->bind_param("ss", $message, $senderType);

    // Executing query
    if ($query->execute()) {
        // Sending back a success message
        echo json_encode([
            "status" => "Successful", 
            "message" => "Message saved successfully"
        ]);
    } else {
        // Sending back an error
        echo json_encode([
            "status" => "Unsuccessful",
            "message" => "Error: " . $query->error
        ]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input data"]);
}
?>
