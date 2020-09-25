<?php
function folderCrawler($path){
	$array=scandir($path);
	echo "<ul>";
	foreach($array as $key => $value){
		echo "<li>".$value."</li>";
}
echo "</ul>";
	
}

folderCrawler("./");

?>