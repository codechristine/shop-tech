<?php

require_once('functions.php');
set_exception_handler('error_handler');

require_once('../../db_connection.php');

session_start();

define('INTERNAL', true);

if($_SERVER['REQUEST_METHOD'] == 'GET'){
  require_once('cart_get.php');
} else if ($_SERVER['REQUEST_METHOD'] == 'POST'){
  require_once('cart_add.php');
} else if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
  require_once('cart_delete.php');
};

?>
