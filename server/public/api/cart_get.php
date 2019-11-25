<?php

if (!defined('INTERNAL')) {
  exit('error: no direct access');
}

if(empty($_SESSION['cartID'])){
  print_r(json_encode([]));
  exit('empty cart');
}

$cartID = intval($_SESSION['cartID']);

if(!$_SESSION['cartID']) {
  throw new Exception('no id');
}

$query = " SELECT c.`id` AS cartItemId, c.`count`, p.`id`, p.`price`, p.`name`, p.`shortDescription`, p.`image`
            FROM `cartItems`AS c
            JOIN `product` AS p
            ON p.`id` = c.`productID`
            ORDER BY c.`productID` ASC ";

$result = mysqli_query($conn, $query);

if (empty($result)) {
  print_r([]);
}

$output = [];

while($row = mysqli_fetch_assoc($result)){
  array_push($output, $row);
}

$json_output = json_encode($output);
print_r($json_output);

?>
