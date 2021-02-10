import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  get nombreValido(){
    return this.miFormulario?.controls.nombreProducto?.invalid && this.miFormulario?.controls.nombreProducto?.touched
  }

  get precioValido(){
    return this.miFormulario?.controls.precioProducto?.touched && this.miFormulario.controls.precioProducto?.value < 0
  }

  constructor() { }

  ngOnInit(): void { }



  guardar() {
    console.log(this.miFormulario.value);
    this.miFormulario.reset({
      precioProducto: 0,
      cantidadProducto: 0
    })
  }

}
