<?php

$name = $_POST['name'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "bara.slavikova@sdt-me.cz";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo"message send";

?>