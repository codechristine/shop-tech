<?php

// header('Content-Type: application/json');

// $method = $_SERVER['REQUEST_METHOD'];
// $item = file_get_contents('php://input');

// if ($method == 'GET') {
//   readfile('dummy-cart-items.json');
// } else if ($method == 'POST') {
//   http_response_code(201);
//   print($item);
// } else {
//   http_response_code(404);
//   print(json_encode([
//     'error' => 'Not Found',
//     'message' => "Cannot $method /api/cart.php"
//   ]));
// }

require_once('functions.php');
set_exception_handler('error_handler');

require_once('db_connection.php');

session_start();

define('INTERNAL', true);

if($_SERVER['REQUEST_METHOD'] == 'GET'){
  require_once('cart_get.php');
} else if ($_SERVER['REQUEST_METHOD'] == 'POST'){
  require_once('cart_add.php');
}

?>
