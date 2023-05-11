import { Course } from './../model/course';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses : Course[] = [
    {
      _id:'1',
      nome:'Angular',
      categoria: 'front-end'
   }
  ];
  displayedColumns = [ 'nome', 'categoria' ];

  constructor(){

  }

  ngOnInit(): void {

  }
}
