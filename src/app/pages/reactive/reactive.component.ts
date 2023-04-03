import { FormattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma= new FormGroup({}); //paso 2

  constructor( private fb:FormBuilder) { //complemento paso 2

    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void {
  }

  //paso 4 para validar campos

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }

  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
  }
  get distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched //complemento paso 4
  }
  get ciudadNoValido(){
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched
  }

  crearFormulario (){   //paso 3
  this.forma = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(5)] ], //validador asincrono, se ejecuta en el mismo hilo de tiempo.
    apellido:['', Validators.required],
    correo:['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$')]], //el pattern se utiliza para validaciones mediante el uso de expresiones regulares.

    direccion: this.fb.group({

      distrito:['', Validators.required],
      ciudad:['', Validators.required],
    })
  })


  }

//paso 6

cargarDataAlFormulario(){
  //con setValue debo setearle un valor x defecto a todos los campos
  // this.forma.setValue({

  //     nombre: 'Juanito',
  //     apellido: 'Perez',
  //     correo: 'juan@gmail.com',
  //     direccion: {
  //       distrito: 'Ontario',
  //       ciudad: 'Otawa'
  //     }

  // })
  //para evitar el inconveniente de tener un valor de campo no seteado se utilizar el RESET
  this.forma.reset({

    nombre: 'Juanito',
    apellido: 'Perez',
    correo: 'juan@gmail.com',
    direccion: {

    }

})
}


  guardar () {

    if(this.forma.invalid){

      return Object.values(this.forma.controls).forEach(control =>{

        //paso 5 pregunto si es de un Form Group o de un Control
        //Group para realizar el touched a la direccion
        if (control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched());
        }else{
        control.markAsTouched();
        }

      })
      console.log(this.forma);

    }

    //posteo de la informacion - paso 7
    //resetear los campos del formulario - paso 8
    this.forma.reset();
  }






}




