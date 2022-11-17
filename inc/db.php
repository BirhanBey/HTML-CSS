<?php

    $server = "sql301.epizy.com";
    $username = "epiz_32944163";
    $password = "IEpgw7VmEAgqJ";
    $dbname = "epiz_32944163_birhanyorukoglu";
    
    $conn = mysqli_connect($server, $username, $password, $dbname);

    if(!$conn){
        die("Connection Failed: ".mysqli_connect_error());
    }

?>