<?php
function process($file){

	$str=file_get_contents($file);
	$file_array=explode("\n", $str);
	
	$array = array();
	$i=0;
	foreach($file_array as $index => $column) {
		$array[] = array((explode(" ",$file_array[$i]))[0] => (explode(" ",$file_array[$i]))[1]);
		$i++;
	}

print_r($array);
	

}

process("tasks.txt");

?>