<?php
$moj_mail = 'majagrys@wp.pl';
$imie = $_POST['contactName'];
$temat = 'Email ze strony Mai Grys: '.$_POST['contactTopic'];
$email = $_POST['contactEmail'];
$tresc = wordwrap($_POST['contactMessage']);
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: '.$email. "\r\n";
$headers .= 'Cc: '.$email. "\r\n";

if (isset($_POST['contactName'])) {
    header('Location ./index.html?asnxkas');
    // mail($moj_mail,$temat,$tresc,$headers)
}
?>