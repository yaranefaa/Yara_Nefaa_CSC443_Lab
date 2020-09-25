<?php
 function insideOut($array){
	 if (count($array)%2==0){
		 $temp=$array[0];
		 $array[0]=$array[(count($array)/2)-1];
		 $array[(count($array)/2)-1]=$temp;
		 
		 $temp1=$array[count($array)-1];
		 $array[count($array)-1]=$array[(count($array)/2)];
		 $array[(count($array)/2)]=$temp1;
		 
	
		
		 return $array;
		 
	 }
	 else{
		 return $array;
	 }
	 
 }
 
$test=array(2,1,1,2);
$test=insideOut($test);
foreach($test as $el){
	echo $el." ";
}


?>