<?php

function error_handler($error){
  http_response_code(500);

  http_response_code(500);


  $output = [
  'success' => false,
  $error -> getMessage()
];

$json_output = json_encode($output);
print($json_output);

}

function startup(){
  header('Content-Type: application/json');
}

function getBodyData(){

  $body = file_get_contents('php://input');
  $data = json_decode($body, true);

  return $data;
}

?>
