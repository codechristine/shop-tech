<?php

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


if(!$result) {
  throw new Exception('error in query' . mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0 && $id !== false) {
  throw new Exception("invalid id:", $id);
}

$productData = [];

while ($row = mysqli_fetch_assoc($result)) {
  array_push($productData, $row);
}

if($id) {
  $productData = $productData[0];
}

$json_output = json_encode($productData);
print($json_output);

$query = mysqli_query($conn, 'START TRANSACTION');

if (!$query) {
  throw new Exception('invalid result');
}

if($cartID === false){
  $query = " INSERT INTO `cart` (created) VALUES (NOW()) ";
  $result = mysqli_query($conn, $query);
}

$cartID = (mysqli_insert_id($conn));
$_SESSION['cartID'] = (mysqli_insert_id($conn));
print_r($cartID);
print_r($_SESSION['cartID']);

if (mysqli_affected_rows($conn) > 0) {
  print_r(mysqli_affected_rows($conn));
} else {
  throw new Exception('no rows were affected');
}

$insertedQuery = " INSERT INTO `cartItems` (count, productID, price, added, cartID )
                    VALUES (1, $id, $query, NOW(), $cartID )
                    ON DUPLICATE KEY UPDATE count = count + 1 ";

$insertResult = mysqli_query($conn, $insertedQuery);
print_r($insertResult);

if (mysqli_affected_rows($conn) > 0) {
  mysqli_query($conn, 'COMMIT');
} else {
  mysqli_query($conn, 'ROLLBACK');
}

?>
