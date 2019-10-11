<?php

require_once('functions.php');
// set_exception_handler('error_handler');

// require_once('db_connection.php');

if(!defined('INTERNAL')){
  exit('error: no direct access');
}

$bodyData = getBodyData();

if($bodyData['id']){
  $id = intval($bodyData['id']);
}

if(!($id > 0)){
  throw new Exception('id is not greater than 0');
}

if(!empty($_SESSION['cartID'])){
  $cartID = $_SESSION['cartID'];
} else {
  $cartID = false;
}

$query = " SELECT `price`
            FROM `product`
            WHERE `id` = $id ";

$result = mysqli_query($conn, $query);


if (!$result) {
  throw new Exception('error in query' . mysqli_error($conn));
}

if (mysqli_num_rows($result) === 0 && $id !== false) {
  throw new Exception("invalid id: $id");
}

$productData = [];

while ($row = mysqli_fetch_assoc($result)) {
  array_push($productData, $row);
}

if ($id) {
  $productData = $productData[0];
}

$json_output = json_encode($productData);
print($json_output);

// START TRANSACTION;

// " SELECT * FROM `cartItems "

?>
