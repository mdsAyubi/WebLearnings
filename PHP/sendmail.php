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

    $emailTo="mds.ayubi@hotmail.com";
    $subject="I hope you are doing great";

    $body = "Great";

    $header = "From: rob@robpercival.co.uk";

    $result = mail($emailTo,$subject, $body,$header);

    if ( $result == 1  ){
      echo "Mail sent";
    }else{
      echo "Not sent";
    }

  ?>

      


    
  </body>
</html>