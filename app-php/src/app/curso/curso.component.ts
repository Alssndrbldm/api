import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 
  //Vetor de cursos
  vetor: Curso[];

  //Objeto da classe curso
  curso = new Curso();


  //construtor
  constructor(
    private curso_servico: CursoService
  ) { }

  //inicializador
  ngOnInit() { 
   //Ao iniciar o sistema, deverá listar os cursos
   this.selecao(); 
  }


  //Seleção
  selecao() {
    this.curso_servico.obterCursos().subscribe(
      (data : any) => {
        this.vetor = data.cursos
      }
    )
  }

  //Cadastro
  cadastro() {
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {

        //Adicionando dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        //Atualizar listagem
        this.selecao();
      }
    )
    
  }

  //Alterar
  alterar(): void {
    alert("Alterar");
  }

  //Remover
  remover() {
    this.curso_servico.removerCurso(this.curso).subscribe(
      () => {
        this.vetor.forEach((curso, index) => {
          if (curso.idCurso == this.curso.idCurso) {
            this.vetor.splice(index, 1)
          }
        })

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

      }
    )
  }

  //Selecionar curso específico
  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}
