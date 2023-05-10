<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");


//Extrair os dados JSON
$extrair = json_decode($obterDados);

//Separar dados do JSON
$idCurso = $extrair->cursos->idCurso;//extrair -acesso a abrir json/cursos-nome do json/nomeCursos-característica

//SQL
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

?>