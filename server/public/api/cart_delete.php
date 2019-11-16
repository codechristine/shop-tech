<?php

if (!defined('INTERNAL')) {
  exit('error: no direct access');
}

$bodyData = getBodyData();

$id = intval($bodyData['id']);

$query = " SELECT *
            FROM `cartItems`
            WHERE `cartItems`.`id` = $id ";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) === 0) {
  throw new Exception("no items to delete");
}

$deletedQuery = " DELETE
                  FROM `cartItems`
                  WHERE `id` = $id ";

$deleteResult = mysqli_query($conn, $deletedQuery);

  if(!$deletedQuery){
    throw new Exception('item delete failed');
  }

  $output = [
    'success' => true,
    'status' => 'item deleted'
  ];

  $json_output = json_encode($output);
  print_r($json_output);

?>
