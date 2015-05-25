<?php

header('Access-Control-Allow-Origin: *');

//connection to db
$mysqli = new mysqli("localhost", "uzerbinx_root", "hypermedia1415", "uzerbinx_gym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {

    if(isset($_POST['id'])) $id = $_POST['id'];
    else $id = '1'; //debug

    # extract results mysqli_result::fetch_array
    $query = "SELECT * FROM corsi WHERE corsi.id=".$id;
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $info = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $info[] = array_map('utf8_encode', $row);
        }
        //echo json_encode($myArray);
    }

    $query = "SELECT * FROM orari_corso WHERE corso=".$id;
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $times = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            array_push($times,array_map('utf8_encode', $row));

        }

    }


    $query = "SELECT * FROM speciali_corso WHERE corso=".$id;
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $specials = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            array_push($specials,array_map('utf8_encode', $row));

        }

    }

    echo json_encode(array('info'=>$info, 'times'=>$times, 'specials'=>$specials));

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}






?>
