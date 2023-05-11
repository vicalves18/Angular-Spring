import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
//Pipe é muito usado para testes - recebem um valor e retornam dependendo da lógica
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'front-end' : return 'code';
      case 'back-end' : return 'computer';
    }
    return 'code';
  }

}
