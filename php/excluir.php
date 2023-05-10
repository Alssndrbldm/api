<?php

//Incluir a conexão
include("conexao.php");

//Obter dados

$url = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

$params = parse_url($url);

parse_str($params['query'], $query);

$idCurso = $query['idCurso'];

//SQL
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

?>