<?php
header('Content-type: text/plain; charset=utf-8');

if (empty($_POST['name']) || empty($_POST['email'])) {
    die("Error: Jméno a email jsou požadované.");
}

$name = $_POST['name'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "Od: \r\n Jméno: $name \r\n Adresa: $adress \r\n Email: $email \r\n Telefonní číslo: $phone";

$recipient = "tomas.slavik@plasmapeening.com, denisa.trochtova@plasmapeening.com";

if (mail($recipient, $subject, $mailheader, $message)) {
    header("Location: redirect-page.html");
} else {
    die("Error: Nebylo možné email odeslat.");
}
?>
