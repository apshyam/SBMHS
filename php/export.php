<?php

// When executed in a browser, this script will prompt for download
// of 'test.xls' which can then be opened by Excel or OpenOffice.

require 'php-export-data.class.php';

$username="shyam";
$password="shyam";
$database="cpa_trial";


mysql_connect('192.168.0.5',$username,$password);
@mysql_select_db($database) or die( "Unable to select database");

$query = "SELECT * FROM testval";
$result = mysql_query($query);

$num = mysql_numrows($result);

mysql_close();


$exporter = new ExportDataExcel('browser', 'temp_data.xls');

$exporter->initialize(); // starts streaming data to web browser

// pass addRow() an array and it converts it to Excel XML format and sends
// it to the browser
$exporter->addRow(array("Timestamp", "Temperature 1", "Temperature 2", "Temperature 3", "Temperature 4", "PWM 1", "PWM 2", "PWM 3", "PWM 4"));

$i = 0;
while ($i < $num)
{
        $datetime=mysql_result($result,$i,"datetime");
        $t1=mysql_result($result,$i,"t1");
        $t2=mysql_result($result,$i,"t2");
        $t3=mysql_result($result,$i,"t3");
        $t4=mysql_result($result,$i,"t4");
        $pwm1=mysql_result($result,$i,"pwm1");
        $pwm2=mysql_result($result,$i,"pwm2");
        $pwm3=mysql_result($result,$i,"pwm3");
        $pwm4=mysql_result($result,$i,"pwm4");
        $exporter->addRow(array($datetime, $t1, $t2, $t3, $t4, $pwm1, $pwm2, $pwm3, $pwm4));
        $i++;
}


$exporter->finalize(); // writes the footer, flushes remaining data to browser.

exit(); // all done

?>
