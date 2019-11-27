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
  // print_r($id);
  $id = intval($_GET['id']);
  $whereClause = " WHERE p.`id`=$id ";
}

$query = " SELECT p.`id`, p.`name`, p.`price`, p.`shortDescription`, p.`image`,
            GROUP_CONCAT(i.`url`) AS 'image'
            FROM `product` AS p
            JOIN `images` as i
            ON p.`id` = i.`product_id`
            $whereClause
            GROUP BY p.`id` ";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('error in query' . mysqli_error($conn));
}

if(mysqli_num_rows($result)===0 && $id!==false){
  throw new Exception("invalid id: $id");
}

$output = [];

while($row = mysqli_fetch_assoc($result)){
  $row['image'] = explode(",", $row['image']);
  array_push($output, $row);
}

if($id){
  $output = $output[0];
}

$json_output = json_encode($output);
print($json_output);

?>
