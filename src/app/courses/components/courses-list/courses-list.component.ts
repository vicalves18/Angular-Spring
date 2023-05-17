import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit{
  @Input() courses : Course[] = [];
  @Output() add = new EventEmitter(false);  //Evento Saindo do componente

  readonly displayedColumns = [ 'nome', 'categoria','actions' ];

  constructor(){}

  adicionar(){
    this.add.emit(true);
  }

  ngOnInit(): void {

  }
}
