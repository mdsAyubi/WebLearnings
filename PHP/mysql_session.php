<?php
	//has to start before anything....even html
	session_start();
	$_SESSION['loginID'] =1 ;

	echo $_SESSION['loginID'];

	setcookie("id","1234",time()+60*60*24);
	echo $_COOKIE['id']; // can be accessed from other scripts


	//To unset a cookie, set expiration in the past
	setcookie("id","",time()-3600);

	//Best way to store password

	md5(md5($row['id']).$password);

?>