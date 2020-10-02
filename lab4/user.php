
<?php

    require("./redirect.php");
    $name=$_SESSION["username"];
    echo "<html>
            <head>
                <title>$name</title>
             </head>
             <body>
             <form method=\"POST\" action=\"./createhtml.php\">
             <fieldset>
                 <legend>Submit</legend>
                 Introduction <input name=\"intro\" type=\"textarea\">
                 <input type=\"file\" id=\"myFile\" name=\"filename\">
                 <input type=\"submit\">
 
             </fieldset>
         </form>
             </body>
        </html>";

?>