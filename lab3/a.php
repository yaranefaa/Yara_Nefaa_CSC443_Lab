<?php

function isPalindrome($str){
	$length=strlen($str);
	$array=str_split($str);
	$str1="";
	$str2="";
	
	for($i=0;$i<((int) ($length/2));$i++){
		$str1.=$array[$i];
		
	}
	
	for($j=(int) $length-1;$j>=((int)($length/2)+1);$j--){
		$str2.=$array[$j];
	
	}
	
	if($str1==$str2){
		echo "Palindrome";
	}else{
		echo "Not Palindrome!";
	}
		
	
	
}
echo "hello ! ";
isPalindrome("radar");




?>