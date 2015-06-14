<?php
/*
 * Big Gym: HYP Project 2014-15
 * getInfo.php
 * Based on the id parameter, retrieve different "static" infos from the db
 * Author: Zerbinati Francesco
 */

header('Access-Control-Allow-Origin: *');

require_once 'config.php';

//connection to db
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {


    if(isset($_POST['id'])) $type = $_POST['id'];
    else $type = '1'; //debug

    switch($type) {

        case '1':
            $query = "SELECT indirizzo FROM info_palestra";
        break;
        case '2':
            $query = "SELECT home1 FROM info_palestra";
        break;
        case '3':
            $query = "SELECT home2 FROM info_palestra";
        break;
        case '4':
            $query = "SELECT promo FROM info_palestra";
        break;
        case '5':
            $query = "SELECT partner FROM info_palestra";
        break;
        case '6':
            $query = "SELECT informazioni FROM info_palestra";
        break;
    }


    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}






?>
