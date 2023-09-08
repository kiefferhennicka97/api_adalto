<?php
header("content-type: application/json");
try{
    $conn = mysqli_connect("localhost","root","PASSWORD","NAMEDATABSE");
    if($conn){

        $result = mysqli_fetch_assoc($conn, "SELECT * FROM produtos" );
        $linhas = array();
        while($row = mysqli_fetch_assoc($result)){
            $linhas = $row;
        }
    mysqli_close($conn);
    echo '{"produtos" : '. json_encode($linhas) . '}';
    }else{
        echo '{"repsotas": "erro ao conectar oa banco de dados"}';
        }
    }catch(\Throwable $th){
        echo '{"repsiotas" : "erro ao conectar no banco novamente"}';
    
    }
}

?>