<?php include('login.php'); ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Secret Diary</title>

        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.2.min.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style type="text/css">
    .box{
      background-color: #d3d3d3;
      border:1px solid gray;
    }

    #div1{
      background-color: blue;
    }


    #div2{
      background-color: red;
    }

    #div3{
      background-color: green;
    }

    .contentDiv{
      height: 800px;
    }

    .navbar-brand{
      font-size: 1.3em;
    }

    #topContainer{
      background-image: url('/xampp/myweb/bg.jpg');
      height: 400px;
      width: 100%;
      background-size: cover;
    }
    #topRow{
      margin-top: 100px;
      text-align: center;

    }
    #topRow h1{
      font-size: 300%;
    }

    .bold{
      font-weight: bold;
    }

    .marginTop{
      margin-top: 30px;
    }
    .center{
      text-align: center;
    }
    .title{
      margin-top: 100px;
      font-size: 300%;
    }
    #footer{
      background-color:#D0D1F8;
      padding-top: 70px;
      width: 100%;

    }

    .marginBottom{
      margin-bottom: 30px;
    }

    .appstoreimg{
      width: 250px;
    }

    </style>

  </head>
  <body>
    
    <div class="navbar navbar-default navbar-fixed-top">


      <div class="container">

          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse"  data-target=".navbar-collapse" >
                  <span class="sr-only">Toggle Navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a href="" class="navbar-brand">Secret Diary</a>

          </div>
          <div class="collapse navbar-collapse">
            

              <form class="navbar-form navbar-right" method="POST">
                <div class="form-group">
                  
                  <input type="email" name="loginemail" placeholder="Email" class="form-control"  value="<? if(isset($_POST['loginemail']))  echo addslashes($_POST['loginemail']); ?>"  />
                </div>
                <div class="form-group">
                   <input type="password" name="loginpassword" placeholder="Password" class="form-control" value="<? if(isset($_POST['loginpassword']))  echo addslashes($_POST['loginpassword']); ?>" />
                </div>
                
                  <input type="submit" name="submit" class="btn btn-success" value="Log In" />
              </form>
          </div>
      </div>
</div>

<div class="container contentContainer" id="topContainer">
  
    <div class="row">
        <div class="col-md-6 col-md-offset-3" id="topRow">
          
          <h1 class="marginTop">Secret Diary...</h1>
          <p class="lead"> Your secret diary</p>

          <?php

          	if( isset($error) AND $error != "" ){
          		echo '<div class="alert alert-danger">'.$error.'</div>';
          	}

          	if( isset($message) AND $message != "" ){
          		echo '<div class="alert alert-success">'.$message.'</div>';
          	}

          ?>


		  <p class="bold marginTop">Interested? Sign up below</p>

        <form class="marginTop" method="POST">
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" name="email" class="form-control" placeholder="Email" value="<? if(isset($_POST['email']))  echo addslashes($_POST['email']); ?>" />
		 </div>

		<div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" placeholder="Password" value="<? if(isset($_POST['password']))  echo addslashes($_POST['password']); ?>"/>
		 </div>

           <input type="submit" name="submit" class="btn btn-success btn-lg marginTop" value="Sign Up" />
         

        </form>
      </div>

    </div>


</div>




    <script type="text/javascript">

   $(".contentContainer").css("min-height",$(window).height());

    </script>
  </body>
</html>









