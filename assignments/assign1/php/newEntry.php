<?php
$name="";
$score="";

if(isset($_POST['name']))
{$name=$_POST['name'];}
if(isset($_POST['score'])){$score=$_POST['score'];}



$serverName = "lab4serverdb.database.windows.net";
    $connectionOptions = array(
        "Database" => "lab4db",
        "Uid" => "christruong",
        "PWD" => "Itsasecret90"
    );
    //Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    if($conn){
        $tsql= "INSERT INTO scoreBoard VALUES('$name','$score');";
        $getResults= sqlsrv_query($conn, $tsql);
    }
    else{
        
    }
exit();

?>