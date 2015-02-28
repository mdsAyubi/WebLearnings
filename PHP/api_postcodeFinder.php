<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Post Code Finder</title>

    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">





<style type="text/css">

   html,body{
    height: 100%;
  }
  
  .container{
    
    background-image: url('/xampp/myweb/postcodebg.jpeg');

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
            <h1 class="center white">Post Code Finder</h1>
            <p class="lead center white">Enter your address</p>

            <form>
              <div class="form-group">
                
                <input type="text" class="form-control" name="city" id="city" placeholder="e.g London"/>


              </div>

              <button id="findPostcode" class="btn btn-success btn-lg">Find Postcode</button>

            </form>

        <div id="success" class="alert alert-success"></div>
        <div id="fail" class="alert alert-danger">Could not find the postcode</div>
        
        <div id="fail2" class="alert alert-danger">Please enter an address...</div>
        
      
        

      </div>



    </div>

</div>
   
<!-- Latest compiled and minified JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<script type="text/javascript">
  
$("#findPostcode").click(function(event){
    
  event.preventDefault();
  $(".alert").hide();

  var result = 0;

  //alert($("#city").val());
  $.ajax({
  type:"GET",
  url: "https://maps.googleapis.com/maps/api/geocode/xml?address="+encodeURIComponent($("#city").val())+"&key=AIzaSyAYYAVipQOD8RNh_kyFc_z3Yq6lMfDePq8",
  
  dataType:"xml",
  success: processXML,
  error=error
});

function error(){
  //alert("Failed...");
  $("#fail2").fadeIn();
}

function processXML(xmlRes){
    //console.log(xml);
    //alert("done..");


    //alert($(xmlRes).find("status").text());
    $(xmlRes).find("address_component").each( function(){

      //alert($(this).text());
      if($(this).find("type").text() == "postal_code"){

           //$("#success").fadeIn();
           //$("#success").html().fadeIn();


           alert("Postcode:"+$(this).find('long_name').text());
           result=1;
      }

    });


    if(result==0){
      #("#fail").fadeIn();
    }

  }
});

 




 
});
</script>
</body>
</html>