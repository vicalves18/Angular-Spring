import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from './../model/course';
import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  //nome normalmente usado para observables
  courses$ : Observable<Course[]>;
  displayedColumns = [ 'nome', 'categoria','actions' ];

  //Injeção de dependência de CoursesService
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.courses$ = this.coursesService.listar().pipe(
      catchError(error => {
        this.messageError('Erro ao carregar cursos!');
        return of([])
      })
    );
  }

  messageError(errosMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errosMsg
    });
  }

  adicionar(){
    console.log('adicionar');
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnInit(): void {}


}
