<?php

include "connection.php";

// reading POST data sent to the server
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// checking if varaibles are json data
if (isset($data['message']) && isset($data['sender_type'])) {
    $message = $data['message'];
    $senderType = $data['sender_type'];

    // preparinf query
    $query = $connection->prepare("INSERT INTO chat_history(message, sender_type) VALUES (?,?)");

    // binding the variables
    $query->bind_param("ss", $message, $sender_type);

    // executing query
if ($query->execute()) {
    // sending back a success message
    echo json_encode([
        "success" => true, 
        "message" => "Message saved successfully"
    ]);
} else {
    // sending back an erro
    echo json_encode([
        "success" => false, 
        "message" => "Error: " . $query->error
    ]);
}
} else {
echo json_encode(["success" => false, "message" => "Invalid input data"]);

}
