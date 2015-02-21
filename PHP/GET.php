<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP</title>


  </head>
  <body>

<?php
    
     if($_GET["submit"]){ 
        if($_GET["name"]){
          echo "Your name is".$_GET['name'];
          echo "<br/>";
        }
        else{
          echo "Please enter you name!!!";
        }
      }  
    //echo "All the vars are:";
    //echo "<br/>";
    //print_r($_GET);
?>


    <form>
    Name: <input type="text" name="name" /><br />
   
    <button type="submit">Submit</button>
    </form>


 

      


    
  </body>
</html>