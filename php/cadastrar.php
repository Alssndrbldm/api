<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");


//Extrair os dados JSON
$extrair = json_decode($obterDados);

//Separar dados do JSON
$nomeCurso = $extrair->cursos->nomeCurso;
//extrair -acesso a abrir json/cursos-nome do json/nomeCursos-característica
$valorCurso = $extrair->cursos->valorCurso;

//SQL
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', '$valorCurso')";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
]

json_encode(['curso']=>$curso);

?>