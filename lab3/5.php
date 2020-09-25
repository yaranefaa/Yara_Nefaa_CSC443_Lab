<?php
function lineSum($line,$file){
	$str=file_get_contents($file);
	$file_array=explode("\n", $str);
	$file_array_line=explode(" ",$file_array[$line-1]);
	$sum=0;
	foreach($file_array_line as $num){
		
		$sum+=(int)$num;
	}
	return $sum;
	
}
echo lineSum(2, "test.txt");

?>