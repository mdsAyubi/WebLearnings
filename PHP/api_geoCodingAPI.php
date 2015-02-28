<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      html, body, #map-canvas { height: 100%; margin: 0; padding: 0;}
    </style>

  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.2.min.js"></script>

  </head>
  <body>

  <script type="text/javascript">

  $.ajax({
  type:"GET",
  url: "https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAYYAVipQOD8RNh_kyFc_z3Yq6lMfDePq8",
  dataType:"xml",
  success:processXML


  });

  function processXML(xml){
    console.log(xml);
    //alert("done..");

    //alert($(xml).find("status").text());
    $(xml).find("address_component").each( function(){

      //alert($(this).text());
      if($(this).find("type").text() == "postal_code"){
          alert($(this).find("long_name").text());

      }

    });


  }

</script>
  </body>
</html>