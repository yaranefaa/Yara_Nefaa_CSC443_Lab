<?php
 session_start();
 
 echo "./".$_SESSION["username"]."";
 mkdir("./".$_SESSION["username"]."", 0700);
 $name=$_SESSION["username"];
 $intro=$_POST["intro"];
 echo "<html>
 <head>
     <title></title>
  </head>
  <body>
    <h1>$name</h1>
    <h2>$intro</h2>
  </body>
</html>";
?>