
<?php

    require("./redirect.php");
    $name=$_SESSION["username"];
    echo "<html>
            <head>
                <title>$name</title>
             </head>
             <body>
             <form method=\"POST\" action=\"./createhtml.php\"  enctype=\"multipart/form-data\">
             <fieldset>
                 <legend>Submit</legend>
                 Introduction <input name=\"intro\" type=\"textarea\">
                 <input type=\"file\" id=\"myFile\" name=\"filename\">
                 <input type=\"submit\" value=\"Upload\">
 
             </fieldset>
         </form>
             </body>
        </html>";

?>
