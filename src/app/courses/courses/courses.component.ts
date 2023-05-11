import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from './../model/course';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses : Observable<Course[]>;
  displayedColumns = [ 'nome', 'categoria' ];

  //Injeção de dependência de CoursesService
  constructor(private coursesService: CoursesService){
    this.courses = this.coursesService.listar();
  }

  ngOnInit(): void {

  }
}
