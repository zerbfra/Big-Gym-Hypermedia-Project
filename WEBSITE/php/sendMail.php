<?php

header('Access-Control-Allow-Origin: *');

$to_email = "francesco289@gmail.com";

// Sanitize input data using PHP filter_var().
$nome      = filter_var($_POST["nome"], FILTER_SANITIZE_STRING);
$email     = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$oggetto   = filter_var($_POST["oggetto"], FILTER_SANITIZE_STRING);
$testo     = filter_var($_POST["testo"], FILTER_SANITIZE_STRING);


// body email
$message_body = $testo."\r\n\r\n-".$nome."\r\nEmail : ".$email."\r\n";

// php email function
$headers = 'From: '.$nome.'' . "\r\n" .
    'Reply-To: '.$email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$send_mail = mail($to_email, $oggetto, $testo, $headers);

if(!$send_mail) {
    $output = json_encode(array('type'=>'error', 'text' => 'Errore invio email'));
    die($output);
} else {
    $output = json_encode(array('type'=>'message', 'text' => 'Email inviata'));
    die($output);
}

?>
