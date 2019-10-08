<?php

require_once('functions.php');
require_once('db_connection.php');

set_exception_handler('error_handler');
startup();

if(empty($_GET[`id`])){
  $whereClause = "";
} else {
  $whereClause = "WHERE `id` = {$_GET[`id`]} ";
}

$query = "SELECT * FROM `product` $whereClause";
$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('error in query' . mysqli_error($conn));
  exit();
}

$output = [
  'data'=> []
];

while($row = mysqli_fetch_assoc($result)){
  array_push($output['data'], $row);
}

$json_output = json_encode($output);
print($json_output);

?>
