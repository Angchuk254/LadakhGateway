<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $comments = $_POST["comments"];

    // Set recipient email address
    $to = "recipient@example.com"; // Replace with the desired email address

    // Set email subject
    $subject = "New Form Submission";

    // Build the email content
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n\n";
    $message .= "Message:\n$comments";

    // Set additional headers if needed
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    echo "Invalid request. Please submit the form.";
}
?>
