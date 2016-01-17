<?php

//header("Content-Type: text/javascript");

if (!$socket = @fsockopen("192.168.0.7",5901 , $errno, $errstr, 1))
{
  //echo "<font color='red'><strong>Offline!</strong></font>";
    $statusAlert = array();
    $statusAlert["Status"] = "Offline";
    echo json_encode($statusAlert);
}
   else
    {
  //echo "<font color='green'><strong>Online!</strong></font>";
        $statusAlert = array();
    $statusAlert["Status"] = "Online";
    echo json_encode($statusAlert);

  fclose($socket);
}

?>
