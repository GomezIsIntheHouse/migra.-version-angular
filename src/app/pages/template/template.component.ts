import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
 usuario={
     nombre:'Julian',
      apellido:'Gomez',
      correo:'julian1995ag@gmail.com',
      pais: '',
      genero: ''
   }

  paises:any=[];

  constructor(private PaisService:PaisService) { }

  ngOnInit(): void {

  this.PaisService.getPaises().subscribe(paises =>{
    this.paises=paises;
    this.paises.unshift({
      nombre:'[Seleccione Pais]',
      codigo: ''
    })
    // console.log(this.paises);
  });


  }


  guardar( formulario:NgForm){

    console.log(formulario);

    if(formulario.invalid){

      Object.values(formulario.controls).forEach(control =>{
        control.markAsTouched();
      })
      return;
    }

    console.log(formulario.value);



   }
}
