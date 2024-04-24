<?php
header('Content-type: text/plain; charset=utf-8');

$name = $_POST['name'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "Od: \r\n Jméno: $name \r\n Adresa: $adress \r\n Email: $email \r\n Telefonní číslo: $phone";

$recipient = "bara.slavikova@sdt-me.cz";

$subject = $subject;

mail($recipient, $subject, $mailheader, $message)
or die("Error!");

header("Location: redirect-page.html");
?>