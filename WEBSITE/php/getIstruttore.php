<?php
/*
 * Big Gym: HYP Project 2014-15
 * getIstruttore.php
 * Retrieve informations about a trainer and related info
 * Author: Zerbinati Francesco
 */

header('Access-Control-Allow-Origin: *');

//connection to db
$mysqli = new mysqli("localhost", "uzerbinx_root", "hypermedia1415", "uzerbinx_gym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {

    if(isset($_POST['id'])) $id = $_POST['id'];
    else $id = '2'; //debug

    # extract results mysqli_result::fetch_array
    $query = "SELECT * FROM istruttori WHERE id=".$id;
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $info = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $info[] = array_map('utf8_encode', $row);
        }

    }

    //free result
    $result->close();

    $query = "SELECT C.id,C.nome FROM corsi as C,corsi_istruttori as CI WHERE C.id=CI.corso AND CI.istruttore =".$id;

    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $courses = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            array_push($courses,array_map('utf8_encode', $row));
        }

    }

    //free result
    $result->close();

    $query = "SELECT COUNT(*) as totali FROM istruttori";

    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $numero[] = array_map('utf8_encode', $row);
        }
    }

    //free result
    $result->close();



    //close connection
    $mysqli->close();

    echo json_encode(array('info'=>$info, 'courses'=>$courses,'num_istruttori'=>$numero));



}






?>
