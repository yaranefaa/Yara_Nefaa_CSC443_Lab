<?php
include("database.php");

$connection=connectDb("localhost","root","","lab7");
echo $connection;

$username=$_POST["username"];
$password=$_POST["password"];
$cc_password=$_POST["cc_password"];
$birthday=$_POST["birthday"];
$table="users";

$res=addUser($connection,$table,$password,$cc_password,$username,$birthday);
echo $res;

?>