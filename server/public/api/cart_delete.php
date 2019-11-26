<?php

if (!defined('INTERNAL')) {
  exit('error: no direct access');
}

$bodyData = getBodyData();

$id = intval($bodyData['id']);

// $queryDelete = " DELETE
//                   FROM `cartItems`
//                   WHERE `id` = $id ";
$queryUpdate = " UPDATE `cartItems`
                  SET `count` = count - 1
                  WHERE `id` = $id ";

$updateResult = mysqli_query($conn, $queryUpdate);

if (!$updateResult) {
  throw new Exception('item failed to update count');
}

$queryDelete = " DELETE
                  FROM `cartItems`
                  WHERE `id` = $id
                  AND count = 0 ";

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
