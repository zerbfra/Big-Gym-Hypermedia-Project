<?php
/*
 * Big Gym: HYP Project 2014-15
 * getCorsi.php
 * Retrieve courses by level, category or no parameter
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

    // in questo caso, non richiedo di organizzare per livello
    if(!isset($_POST['lvl'])) {

        // se richiedo solo una categoria, controllo
        if(isset($_POST['cat'])) {
            $cat = $_POST['cat'];
            $query = "SELECT * FROM corsi WHERE categoria ='".$cat."' ORDER BY nome";
        } else $query = "SELECT * FROM corsi ORDER BY nome";
        //query execution
        $result = $mysqli->query($query);
        //if there are data available
        if($result->num_rows >0)
        {
            $courses = array();//create an array
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                $courses[] = array_map('utf8_encode', $row);	//<----- CORRECT HERE
            }

        }

        //free result
        $result->close();
        // print results
        echo json_encode($courses);

    } else {
        // organizzo per livello BASE
        $query = "SELECT * FROM corsi WHERE livello = 'Base' ORDER BY nome";
        $base = array();//create an array
        //query execution
        $result = $mysqli->query($query);
        //if there are data available
        if($result->num_rows >0)
        {
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                array_push($base,array_map('utf8_encode', $row));
            }
        }

        //free result
        $result->close();

        // organizzo per livello MEDIO
        $query = "SELECT * FROM corsi WHERE livello = 'Medio' ORDER BY nome";
        $medio = array();//create an array
        //query execution
        $result = $mysqli->query($query);
        //if there are data available
        if($result->num_rows >0)
        {
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                array_push($medio,array_map('utf8_encode', $row));
            }
        }

        //free result
        $result->close();

        // organizzo per livello AVANZATO
        $query = "SELECT * FROM corsi WHERE livello = 'Avanzato' ORDER BY nome";
        $avanzato = array();//create an array
        //query execution
        $result = $mysqli->query($query);
        //if there are data available
        if($result->num_rows >0)
        {
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                array_push($avanzato,array_map('utf8_encode', $row));
            }
        }

        //free result
        $result->close();

        // stampo risultati
        echo json_encode(array('base'=>$base, 'medio'=>$medio, 'avanzato'=>$avanzato));
    }

    //close connection
    $mysqli->close();

}






?>
