<?php
function gcd($a,$b){
	
	if($b==0){
		return $a;
	}else{
		return gcd($b,$a%$b);
	}
}
echo gcd(24,84);

?>