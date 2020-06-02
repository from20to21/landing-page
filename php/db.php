<?
//db.php
    $host = "localhost";
    $user = "lshpf";//dothome id
    $pw = "a951753!";//dothome pw
    $dbName = "lshpf";
    $dbConnect = mysqli_connect($host, $user, $pw, $dbName);

    $dbcon = new mysqli($host,$user,$pw,$dbName);

    function mq($sql){ //쿼리명령문함수
        global $dbcon;
        return $dbcon->query($sql);
    }

?>
