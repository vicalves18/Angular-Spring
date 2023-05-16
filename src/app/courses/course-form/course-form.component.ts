import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit{

  form = this.formBuilder.group({
    nome: [''],
    categoria: ['']
  });

  constructor(
    private formBuilder : NonNullableFormBuilder,
    private service : CoursesService,
    private snackBar : MatSnackBar,
    private location: Location
    ){
    //this.form
  }

  ngOnInit(): void {

  }

  salvar(){
    this.service.salvar(this.form.value).subscribe(
      result => this.sucesso(),
      resultError => this.error()
    );
    this.cancelar();
  }

  cancelar(){
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open('Curso salvo com sucesso!','',{
      duration : 5000
    });
  }

  private error(){
    this.snackBar.open('Erro ao salvar curso.','',{
      duration : 5000
    });
  }
}
