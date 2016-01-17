<?php
if (!function_exists("ssh2_connect")) die("function ssh2_connect doesn't exist");
// log in at server1.example.com on port 22
if(!($con = ssh2_connect("192.168.0.7", 22))){
    echo "fail: unable to establish connection\n";
} else {
    // try to authenticate with username root, password secretpassword
    if(!ssh2_auth_password($con, "pi", "password")) {
        echo "fail: unable to authenticate\n";
    } else {
        // allright, we're in!
        /*$stream = ssh2_exec($con, 'php -v');
        stream_set_blocking($stream, true);
        $stream_out = ssh2_fetch_stream($stream, SSH2_STREAM_STDIO);
        echo stream_get_contents($stream_out);*/
        echo "okay: logged in... done\n";

        // execute a command
        if (($stream = ssh2_exec($con, "cd python-spi && sudo python finalcpa_v2.py" ))) {
            stream_set_blocking($stream, true);
            $stream_out = ssh2_fetch_stream($stream, SSH2_STREAM_STDIO);
            echo stream_get_contents($stream_out);
            $data = "";
            while ($buf = fread($stream,4096)) {
                $data .= $buf;
            }
            fclose($stream);
        } else {
            echo "sdf";
            // collect returning data from command
            /*stream_set_blocking($stream, true);
            $stream_out = ssh2_fetch_stream($stream, SSH2_STREAM_STDIO);
            echo stream_get_contents($stream_out);
            $data = "";
            while ($buf = fread($stream,4096)) {
                $data .= $buf;
            }
            fclose($stream);*/
        }
    }
}
?>
