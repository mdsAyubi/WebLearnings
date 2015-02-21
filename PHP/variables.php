<?php

$test="I am a variable";
echo $test;

echo "<br/>";

$quotedText = " \"I am a string\"";
echo $quotedText;


echo "<br/>";

echo $test.$quotedText;


echo "<br/>";

$num = 75;
echo $num;


echo "<br/>";

$name="Viksy";

echo "My name is $name";
echo "My name is".$name;


echo "<br/>";

$a="name";
echo $$a;


echo "<br/>";

//Arrays

$myArray = array("pizza","chocolate","coffee");

print_r($myArray);
echo "<br/>";

echo $myArray[2];
echo "<br/>";

//echo $myArray[5]; //nothing will happen...kinder language..undefined offset error
echo "<br/>";

$anotherArray[0]="pizza";
$anotherArray[1]="chocolate";


print_r(($anotherArray));
echo "<br/>";



$thirdArray = array(

"France"=>"French",
"USA"=>"Emglish",
"Germany"=>"Grman"

	);

$anotherArray[]="isSalad";
echo "<br/>";

print_r($anotherArray);


unset($thirdArray["Germany"]);

print_r($name);
echo "<br/>";

$a=7;
$b=8;
$number = 1;

$anotherNumber = 2;
$thirdNumber = 2;

if ( $number == 1 ) {
	echo "True";
	echo "<br/>";

}else{
	echo "False";
}

// == != 
//Logical expressions AND , OR

//For Loops

for($i = 1; $i < 10 ; $i++){
	echo $i;
	echo "<br/>";

}

$animals=array("cats","dogs","kanagaroo");

foreach ($animals as $key => $value) {
	# code...
	echo $key.":".$value;
	echo "<br/>";
}

//While loops

$i=0;
while($i <= 20){
	echo "$i";
	$i++;
	echo "<br/>";
}

//More example
echo "Echoing animals....";
$i=0;
while($animals[$i]){
	echo $animals[$i];
	$i++;
	echo "<br/>";
}




?>


