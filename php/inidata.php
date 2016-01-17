<?php

header("Content-Type: text/javascript");

$settemp1 = $_POST['T1'];
//$pwm1 = $_POST['PWM1'];
$kp1 = $_POST['Kp1'];
$ki1 = $_POST['Ki1'];
$kd1 = $_POST['Kd1'];

$settemp2 = $_POST['T2'];
//$pwm2 = $_POST['PWM2'];
$kp2 = $_POST['Kp2'];
$ki2 = $_POST['Ki2'];
$kd2 = $_POST['Kd2'];

$settemp3 = $_POST['T3'];
//$pwm3 = $_POST['PWM3'];
$kp3 = $_POST['Kp3'];
$ki3 = $_POST['Ki3'];
$kd3 = $_POST['Kd3'];

$settemp4 = $_POST['T4'];
//$pwm4 = $_POST['PWM4'];
$kp4 = $_POST['Kp4'];
$ki4 = $_POST['Ki4'];
$kd4 = $_POST['Kd4'];

$username="shyam";
$password="shyam";
$database="cpa_trial";


mysql_connect('192.168.0.5',$username,$password);
@mysql_select_db($database) or die( "Unable to select database");

$sql = "INSERT INTO initval (settemp1, settemp2, settemp3, settemp4, kp1, kp2, kp3, kp4, ki1, ki2, ki3, ki4, kd1, kd2, kd3, kd4)
VALUES ($settemp1, $settemp2, $settemp3, $settemp4, $kp1, $kp2, $kp3, $kp4, $ki1, $ki2, $ki3, $ki4, $kd1, $kd2, $kd3, $kd4)";

/*$sql = "INSERT INTO initval (settemp1, settemp2, settemp3, settemp4, kp1, kp2, kp3, kp4, ki1, ki2, ki3, ki4, kd1, kd2, kd3, kd4)
VALUES (2, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 2)";*/

mysql_query($sql);
mysql_close();


?>
