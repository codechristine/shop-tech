<?php

if (!defined('INTERNAL')) {
  exit('error: no direct access');
}

if(empty($_SESSION['cartID'])){
  print_r(json_encode([]));
  exit();
}

if($_SESSION['cartID']) {
  $cartID = intval($_SESSION['cartID']);
}

$query = " SELECT * FROM `cartItems`AS c
            JOIN `product` AS p
            ON p.`id` = c.`productID`
            GROUP BY p.id ";

$result = mysqli_query($conn, $query);

if(empty($result)){
  print_r([]);
} else {
  print_r($result);
}

?>
