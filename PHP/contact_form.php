<?php

if ( isset($_POST["submit"]) ) {
  $result = '<div class="alert alert-success"> Form Submitted...</div>';

  if (!$_POST['name']){
    $error = "Please enter your name <br/>";
  }

   //if (!$_POST['email']){
    //$error .= $error."Please enter email<br/>";
  //}

  if ( isset($_POST['email']) AND !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) { 
    $error .= "Enter a valid email!!!<br/>"; 
  }

   if (!$_POST['comment']){
    $error .= "Please enter your comment <br/>";
  }



  if(isset($error)){
    $result = '<div class="alert alert-danger"><strong>There are errors in your form</strong></br>'.$error.'</div>';
  }
  else{
    $body = "Name:".$_POST['name']." Comment:".$_POST['comment'];
    $mailStatus = mail("mds.ayubi@gmail.com","Comment from site",$body);

    if($mailStatus == 1){
      $result = '<div class="alert alert-danger"><strong>Mail sent...</strong></br></div>';
    }else{
      $result = '<div class="alert alert-danger"><strong>Mail not sent</strong></br></div>';
    }

  }




  

}

?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP</title>

    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<style type="text/css">
  
.emailform{
  border:1px solid gray;
  border-radius: 10px;
  margin-top: 20px;
}

textarea{
  height: 120px;
}

form{
  padding-bottom: 20px;
}

</style>


</head>
  <body>


<div class="container">
  <div class="row">
      <div class="col-md-6 col-md-offset-3 emailform">
        <h1>My Email Form</h1>

        <?php
          if(isset($result)){
            echo $result;
          }
        ?>

        <p class="lead">Please get in touch...</p>

        <form method="POST">

          <div class="form-group">
            <label form="name">Your NAme:</label>
            <input type="text" name="name" class="form-control" placeholder="Name" value="<?php  if (isset($_POST['name'])){echo $_POST['name'];}  ?>" />
          </div>

          <div class="form-group">
            <label form="email">Your Email:</label>
            <input type="email" name="email" class="form-control" placeholder="Email" value="<?php  if (isset($_POST['name'])){echo $_POST['email']; } ?>"/>
          </div>

          <div class="form-group">
            <label form="name">Your Comment</label>
            
            <textarea class="form-control" name="comment"><?php  if (isset($_POST['name'])){echo $_POST['comment']; }  ?></textarea>
          </div>

          <input type="submit" name="submit" class="btn btn-success btn-lg" value="Submit" />
        </form>

      </div>
  </div>
</div>
   



    <?php
    /*
    $emailTo="mds.ayubi@hotmail.com";
    $subject="I hope you are doing great";

    $body = "Great";

    $header = "From: rob@robpercival.co.uk";

    $result = mail($emailTo,$subject, $body,$header);

    if ( $result == 1  ){
      echo "Mail sent";
    }else{
      echo "Not sent";
    }*/

  ?>


 

      


    
  </body>
</html>