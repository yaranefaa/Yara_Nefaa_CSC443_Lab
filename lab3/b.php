<?php
function drunkenCapitalizer($str){
	$strCapitalized="";
	$array=str_split($str);
	for($i=0;$i<strlen($str);$i++){
		$random=rand(0,10);
		if($random%2==0){
			$strCapitalized.=strtoupper($array[$i]);
		}
		else{
			$strCapitalized.=($array[$i]);
		}
		
	}
	
	echo $strCapitalized;
	
}

drunkenCapitalizer("yara");
?>
