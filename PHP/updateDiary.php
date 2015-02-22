<?php

session_start();

include('connection.php');

$diaryEntry = mysqli_real_escape_string($link,$_POST['diary']);

$updateQuery = "UPDATE users SET diary = '".$diaryEntry."' WHERE id='".$_SESSION['id']."' LIMIT 1";

mysqli_query($link,$updateQuery);

?>