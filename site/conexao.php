<?php

    $host = "localhost";
    $user = "root";
    $pass = "";
    $bancoD = "cad"; 

    $conexao = mysqli_connect( $host, $user, $pass, $bancoD);
    // if ($conexao ->connect_errno){
    //     echo "Falha ao conectar: (". $conexao->connect_errno .")" . $conexao->connect_error;
    // }else {
    //     echo "Sucesso!";
    // }

?>