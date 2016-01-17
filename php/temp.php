<?php

header("Content-Type: text/javascript");

//phpinfo();

$username="shyam";
$password="shyam";
$database="cpa_trial";


mysql_connect('192.168.0.5',$username,$password);
@mysql_select_db($database) or die( "Unable to select database");

$query = "SELECT * FROM testval";
$result = mysql_query($query);

$num = mysql_numrows($result);

mysql_close();

$tempValues = array();

$i = 0;
while ($i < $num)
{
        $dateAndTemps = array();
        $datetime=mysql_result($result,$i,"datetime");
        $t1=mysql_result($result,$i,"t1");
        $t2=mysql_result($result,$i,"t2");
        $t3=mysql_result($result,$i,"t3");
        $t4=mysql_result($result,$i,"t4");
        $pwm1=mysql_result($result,$i,"pwm1");
        $pwm2=mysql_result($result,$i,"pwm2");
        $pwm3=mysql_result($result,$i,"pwm3");
        $pwm4=mysql_result($result,$i,"pwm4");
        $utctime=mysql_result($result,$i,"utctime");

        $dateAndTemps["DateTime"] = $datetime;
        $dateAndTemps["Temp1"] = $t1;
        $dateAndTemps["Temp2"] = $t2;
        $dateAndTemps["Temp3"] = $t3;
        $dateAndTemps["Temp4"] = $t4;
        $dateAndTemps["PWM1"] = $pwm1;
        $dateAndTemps["PWM2"] = $pwm2;
        $dateAndTemps["PWM3"] = $pwm3;
        $dateAndTemps["PWM4"] = $pwm4;
        $dateAndTemps["UTCTime"] = $utctime;

        $tempValues[$i]=$dateAndTemps;
        $i++;
}

//$tempValuesArr = array($tempValues);

echo json_encode($tempValues);

?>
