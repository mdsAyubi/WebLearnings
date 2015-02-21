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

    $names = array("A","B","C");
    
     if($_POST["submit"]){ 
        if($_POST["name"]){
          
          echo "<br/>";

          foreach ($names as $name) {
            
              if($name == $_POST['name']){
                echo "Hello.. I know you!!";
                echo "Your name is".$_POST['name'];
              }

          }
        }
      }  
    //echo "All the vars are:";
    //echo "<br/>";
    //print_r($_GET);
?>


    <form method="POST">
    Name: <input type="text" name="name" /><br />
   
    <button type="submit">Submit</button>
    </form>


 

      


    
  </body>
</html>