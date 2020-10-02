<?php
 session_start();
 echo "./".$_SESSION["username"]."";
 mkdir("./".$_SESSION["username"]."", 0700);

if (($_FILES['filename']['name']!="")){
// Where the file is going to be stored
 $target_dir = "./".$_SESSION["username"]."/";
 echo $target_dir;
 $file = $_FILES['filename']['name'];
 $path = pathinfo($file);
 $filename = $path['filename'];
 $ext = $path['extension'];
 $temp_name = $_FILES['filename']['tmp_name'];
 $path_filename_ext = $target_dir.$filename.".".$ext;
 
// Check if file already exists
if (file_exists($path_filename_ext)) {
 echo "Sorry, file already exists.";
 }else{
    move_uploaded_file($temp_name, $path_filename_ext);
 
 echo "Congratulations! File Uploaded Successfully.";
 }
}

$name=$_SESSION["username"];
$intro=$_POST["intro"];

$text= "<html>
 <head>
     <title></title>
  </head>
  <body>
    <h1>$name</h1>
    <h2>$intro</h2>
    <img src=\"$filename.$ext\"/>
  </body>
</html>";

 


 $newFileName = $target_dir."user.html";
$newFileContent = $text;

if (file_put_contents($newFileName, $newFileContent) !== false) {
    echo "File created (" . basename($newFileName) . ")";
} else {
    echo "Cannot create file (" . basename($newFileName) . ")";
}

header("Location:"."./$target_dir".""."user.html");
 
?>
