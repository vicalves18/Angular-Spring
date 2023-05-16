import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit{

  form : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private service : CoursesService,
    private snackBar : MatSnackBar
    ){
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
  }

  ngOnInit(): void {}

  salvar(){
    this.service.salvar(this.form.value).subscribe(
      result => console.log(result),
      error => this.error()
    );
  }

  cancelar(){

  }

  private error(){
    this.snackBar.open('Erro ao salvar curso.','',{
      duration : 5000
    });
  }
}
