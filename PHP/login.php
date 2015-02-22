<?php
session_start();

if ( isset($_GET['logout']) AND $_GET['logout'] == 1 AND $_SESSION) {
	session_destroy();
	$message = "You have been logged out";
}

include('connection.php');

if (isset( $_POST['submit'] )AND $_POST['submit'] == 'Sign Up'){
	
	if (! $_POST['email'] ) $error .= "<br/>Please enter emil";
		else if ( ! filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
				$error .= "<br/>Please enter valid email"; 

	if ( ! $_POST['password'] )
		$error .= "<br/>Please enter a password";
	else{
		if (strlen($_POST['password']) < 8 ) 
			$error .= "<br/>Password does not have at least 8 characters";
		if( !preg_match('`[A-Z]`', $_POST['password']))
			$error .= "<br/>Include at least one capital letter";
	}

	if ( isset( $error ) AND $error != "" )
		$error = "There were errors in sign up..!!".$error;


	else{

		$query = "SELECT * from users WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."'";

		$result = mysqli_query($link,$query);
		$results = mysqli_num_rows($result);
		//echo $results;

		if($results)
			$error .= "Email already registered";
		else{
				$insertQuery = "INSERT INTO `users` (`email`, `password`) values ('".mysqli_real_escape_string($link, $_POST['email'])."','".md5(md5($_POST['email']).$_POST['password'])."')";
				mysqli_query($link,$insertQuery);
				echo "You have been signed up";

				$_SESSION['id'] = mysqli_insert_id($link);
				//print_r($_SESSION);

				//Redirect to logged in page...
				header("Location:mainPage.php");

		}

	}
}

if( isset($_POST['submit']) AND $_POST['submit'] == 'Log In' ){

	$saneEmail = mysqli_real_escape_string($link, $_POST['loginemail']);
	$hashedPassword = md5(md5($_POST['loginemail']).$_POST['loginpassword']);

	$query = "SELECT * FROM users where email = '".$saneEmail."' AND password='".$hashedPassword."' LIMIT 1";

	$result = mysqli_query($link, $query);
	$row = mysqli_fetch_array($result);

	//print_r($row);

	if($row){
		$_SESSION['id'] = $row['id'];
		//print_r($_SESSION);
		//Redirect to logged in page...
		header("Location:mainPage.php");
	}else{
		$error .= "Could not find the user ...";
	}


}




?>