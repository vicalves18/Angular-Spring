import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {

   }

  listar(){
    //pipe() debbugar - tap() executa o resultado do observable
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //obtem a primeira resposta e fecha conexão
      delay(500),
      tap(courses => console.log(courses))
    );
  }

  salvar(course : Partial<Course>){
    if(course._id){
      return this.editar(course);
    }
    return this.criar(course);
  }

  buscarPorId(id : string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  private criar(course : Partial<Course>){
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }

  private editar(course : Partial<Course>){
    return this.httpClient.put<Course>(`${this.API}/${course._id}`, course).pipe(first());
  }
}
