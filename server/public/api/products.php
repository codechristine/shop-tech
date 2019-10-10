<?php

require_once('functions.php');
require_once('db_connection.php');

set_exception_handler('error_handler');
startup();

$query = "SELECT * FROM `product` WHERE 1";
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error in query' . mysqli_error($conn));
}

$output = [
  'data' => []
];

while ($row = mysqli_fetch_assoc($result)) {
  array_push($output['data'], $row);
}

$json_output = json_encode($output);
print($json_output);


print($output);

?>
