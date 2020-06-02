<? 
    include_once $_SERVER['DOCUMENT_ROOT']."/php/db.php";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $contents = $_POST["contents"];

    $query = "INSERT INTO contact(name, email, contents) VALUES ('$name', '$email', '$contents')";
    
    mq($query);

    echo "<script>alert('SUCCESS');</script>";
    echo "<script>location.href='contact.php';</script>";
?>
