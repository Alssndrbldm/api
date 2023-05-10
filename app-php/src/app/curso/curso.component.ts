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
  cadastro(): void {
    alert("Cadastro");
  }

  //Alterar
  alterar(): void {
    alert("Alterar");
  }

  //Remover
  remover(): void {
    alert("Remover");
  }

}
