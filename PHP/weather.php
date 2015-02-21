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
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.2.min.js"></script>


<style type="text/css">

   html,body{
    height: 100%;
  }
  
  .container{
    
    background-image: url('/xampp/myweb/bg.jpeg');

    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    padding-top: 100px;
  }

  .color{
    color: white;
  }

  .center{
    text-align: center;
  }

  p{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  button{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .alert{
    margin-top: 20px;
    display: none;
  }


</style>

</head>
  <body>


<div class="container">

    <div class="row">
      <div class="col-md-6 col-md-offset-3 center">
            <h1 class="center white">Weatherman</h1>
            <p class="lead center white">Enter your city</p>

            <form>
              <div class="form-group">
                
                <input type="text" class="form-control" name="city" id="city" placeholder="e.g London"/>


              </div>

              <button id="findMyWeather" class="btn btn-success btn-lg">Find Weather</button>

            </form>

        <div id="success" class="alert alert-success"></div>
        <div id="fail" class="alert alert-danger">Could not find weather</div>
        
        <div id="no-city" class="alert alert-danger">Please enter a city...</div>
        
      
        

      </div>



    </div>

</div>
   


<script type="text/javascript">
  
$("#findMyWeather").click(function(event){
    event.preventDefault();
    $(".alert").hide();

    if( $("#city").val() != "" ){

    $.get("scrapper.php?city="+$("#city").val() , function(data){
        //alert(data);
        
        //console.log(data);
        if(data == ""){
            $("#fail").fadeIn();
        }else{
          
          $("#success").html(data).fadeIn();
        }

    });
  }
  else{
    $("#no-city").fadeIn();
  }

});

</script>
 

      


    
  </body>
</html>