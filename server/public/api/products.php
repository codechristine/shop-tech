<?php

require_once('functions.php');
set_exception_handler('error_handler');

require_once('db_connection.php');
startup();

$whereClause = "";
$id = false;

if(!empty($_GET['id'])){
  if(!is_numeric($_GET['id'])){
    throw new Exception('id must be an int');
  }
  print_r($id);
  $id = intval($_GET['id']);
  $whereClause = " WHERE `id`=$id ";
}

$query = "SELECT * FROM `product` $whereClause";
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error in query' . mysqli_error($conn));
}

if(mysqli_num_rows($result)===0 && $id!==false){
  throw new Exception("invalid id: $id");
}

$output = [];

while($row = mysqli_fetch_assoc($result)){
  array_push($output, $row);
}

if($id){
  $output = $output[0];

$json_output = json_encode($output);
print($json_output);

print($output);

?>
