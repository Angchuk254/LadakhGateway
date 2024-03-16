<?php
// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate form data
    $name = trim($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $comments = trim($_POST["comments"]);

    // Check if required fields are not empty
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($comments)) {
        // Set recipient email address
        $to = "reservation@ladakhthrill.com"; // Replace with the desired email address

        // Set email subject
        $subject = "New Form Submission";

        // Build the email content
        $message = "Name: $name\n";
        $message .= "Email: $email\n";
        $message .= "Phone: $phone\n\n";
        $message .= "Message:\n$comments";

        // Set additional headers
        $headers = "From: $email" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            // Display an alert for 2 seconds
            echo "<script>alert('Email sent successfully!'); setTimeout(function(){ window.location.href = 'index.html'; }, 100);</script>";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        echo "All fields are required. Please fill out the form completely.";
    }
} else {
    echo "Invalid request. Please submit the form.";
}
?>
