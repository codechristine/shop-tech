<?php

if (!defined('INTERNAL')) {
  exit('error: no direct access');
}

$bodyData = getBodyData();

$id = intval($bodyData['id']);

$queryDelete = " DELETE
                  FROM `cartItems`
                  WHERE `id` = $id ";

$deleteResult = mysqli_query($conn, $queryDelete);

  if(!$deleteResult){
    throw new Exception('item failed to delete');
  }

  $output = [
    'success' => true,
    'status' => 'item deleted'
  ];

  $json_output = json_encode($output);
  print_r($json_output);

?>
