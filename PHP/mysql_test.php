<?php

$link = mysqli_connect("localhost", "viky","DDCQ9jMUV5XDQBpx", "exampledb");
//DDCQ9jMUV5XDQBpx
if(mysqli_connect_error()){
	die( 'Could not connect to db' );
}else{
	echo "Working...";	
}

/*
//Inserting and Updating Initial data...
$insertQuery = "INSERT INTO `users` (`name`,`email`,`password`) VALUES ('Saif','saif@saif.com','pineapples')";
$updateQuery = "UPDATE `users` SET `email`='saif@saif1.com' WHERE `id`=2 LIMIT 1";
mysqli_query($link,$insertQuery);
mysqli_query($link,$updateQuery);
*/


$query = "SELECT * FROM users";
$status = mysqli_query($link,$query);
echo mysqli_num_rows($status);

if ($status){
	echo 'It works....';

	while($row = mysqli_fetch_array($status)){
		print_r($row);
	}


}else{
	echo 'Failed..';
}

?>