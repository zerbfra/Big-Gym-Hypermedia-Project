<?php
/*
 * Big Gym: HYP Project 2014-15
 * getCorso.php
 * Retrieve one course by id, with all the associated informations
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

    //free result
    $result->close();

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

    //free result
    $result->close();

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


    $query = "SELECT nome,id,img_small FROM istruttori WHERE id=(SELECT istruttore FROM corsi WHERE id=".$id.")";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $trainer = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            array_push($trainer,array_map('utf8_encode', $row));

        }

    }

    // encapsulate info, times, specials and trainer
    echo json_encode(array('info'=>$info, 'times'=>$times, 'specials'=>$specials,'trainer'=>$trainer));

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}






?>
