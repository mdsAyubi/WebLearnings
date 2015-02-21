<?php

$city = $_GET['city'];
$city = str_replace(' ', '-', $city);

//print_r($city);

$contents = file_get_contents("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");

//print_r($contents);

//preg_match('/3 Day Weather Forecast Summary:<\/b><span class="phrase">(.*?)</s', $contents,$matches);
preg_match('/3 Day Weather Forecast Summary:<\/b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">(.*?)</s', $contents,$matches);
//3 Day Weather Forecast Summary:<\/b><span class="phrase">(.*?)</s
print_r($matches[1]);



//'/3 Day Weather Forecast Summary:<\/b><span class="phrase">(.*?)</s'

?>