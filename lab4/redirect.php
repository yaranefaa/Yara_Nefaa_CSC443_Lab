<?php
session_start();
    require("./database.php");
    $connection=connectDb("localhost","root","","test");
    if($_SERVER["REQUEST_METHOD"]=="POST")
    {
        
        $_SESSION['username'] = $_POST["username_txt"];
        $_SESSION['passowrd'] = $_POST["pass_txt"];
        $result= addUser($connection,"users",$_POST["pass_txt"],$_POST["username_txt"]);
        if($result==-1)
        {
            alert("user Exists");
            header("Location: ./user.php"); 
        }
     /*   else if($result==-2)
        {
            alert("password dont match");
        }*/
        else if($result==1)
        {
            alert("added successfully");
            header("Location: ./user.php?username={$_POST["username_txt"]}&password={$_POST["pass_txt"]}"); 
            
        }
    }

?>