import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url= "http://localhost/api/php/";

  //Vetor
  vetor:Curso[];

  //Construtor
  constructor(
    private http:HttpClient
  ) { }

  //Obter todos os cursos
  obterCursos() {
    return this.http.get<Curso[]>(this.url+"listar.php").pipe(
      map((res) => {
        this.vetor = res
        return this.vetor
      })
    )
  }

  //Cadastrar curso
  cadastrarCurso(c:Curso): Observable<Curso[]>{
    console.log(c);
    
    return this.http.post(this.url+'cadastrar.php', {cursos:c})
    .pipe(map((res:any) => {
      console.log(this.vetor);
      
      this.vetor.push(res['cursos']);
      return this.vetor;
    }));
  } 

  //Remover curso
  removerCurso(c: Curso): Observable<any> {
    const params = new HttpParams().set("idCurso", c.idCurso?.toString());
    return this.http.delete(this.url+'excluir.php', {params: params})
  }

  //Atualizar curso
  atualizarCurso(c:Curso): Observable<Curso[]> {
    //Executa a alteração via URL
    return this.http.put(this.url+'alterar.php', {cursos: c})
    //Percorrer o vetor para saber qual é o id do curso alterado
    .pipe(map((res) => {
      const cursoAlterado = this.vetor.find((item) => {
        return +item['idCurso'] === +[];
      });
      //Altera o valor do vetor local
      if(cursoAlterado){
        cursoAlterado['nomeCurso'] = c['nomeCurso'];
        cursoAlterado['valorCurso'] = c['valorCurso'];
      }
      //Retorno
      return this.vetor;

    }));
  }
}
