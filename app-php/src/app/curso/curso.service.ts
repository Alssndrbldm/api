import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { map } from 'rxjs';

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
}
