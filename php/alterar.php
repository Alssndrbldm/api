<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");


//Extrair os dados JSON
$extrair = json_decode($obterDados);

//Separar dados do JSON
$idCurso = $extrair->cursos->idCurso;//extrair -acesso a abrir json/cursos-nome do json/nomeCursos-característica
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

//SQL
$sql = "UPDATE cursos SET nomeCurso='$nomeCurso', valorCurso=$valorCurso WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
    'idCurso' => $idCurso,
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

echo json_encode(['curso'=>$curso]);

?>