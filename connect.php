<?php
// Replace these variables with your actual database credentials
$servername = "srv1326.hstgr.io";
$username = "u643722725_root";
$password = "3#MyEysSl*";
$database = "u643722725_registration";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize and validate input
function cleanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Get form data
$name = cleanInput($_POST['name']);
$email = cleanInput($_POST['email']);
$phone = cleanInput($_POST['phone']);
$comments = cleanInput($_POST['comments']);

// SQL query with prepared statement to insert data into the table
$sql = "INSERT INTO ContactTravel (name, email, phone, comments) VALUES (?, ?, ?, ?)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $phone, $comments);

// Execute the statement
if ($stmt->execute()) {
    echo "Form data stored successfully!";
} else {
    echo "Error: Unable to store form data";
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
