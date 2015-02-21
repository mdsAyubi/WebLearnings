<!DOCTYPE html>
<html lang="en">
  <head>
 

    </style>

  </head>
  <body>

    <?php
      echo "Hello World";
      date_default_timezone_set('UTC');

      echo date('h:i:s:u a, l F jS Y e');
      $userName = $_POST['username'];
      $street = $_POST['street'];
      $city = $_POST['city'];

      echo $userName. "</br>";
      echo $street."</br>";
      echo $city."</br>";

      define('PI', 3.14);
      $refTo = &$street;

      echo $refTo;

 
      echo str;

      //fucntion addNum($num1 , $num2){
        //return $num1+$num2;
      //}



    ?>    

  </body>
</html>