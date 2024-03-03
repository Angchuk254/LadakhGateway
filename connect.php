<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $comments = $_POST["comments"];

  // Customize the email content
  $to = "support@ladakhthrill.com"; // Replace with your email address
  $subject = "New Form Submission";
  $message = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$comments";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  mail($to, $subject, $message, $headers);

  // You can customize the response message sent back to the client
  echo "Form submitted successfully!";
} else {
  // Handle invalid request
  echo "Invalid request";
}
?>
