import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {

   }

  listar(){
    //pipe() debbugar - tap() executa o resultado do observable
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //obtem a primeira resposta e fecha conexão
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
