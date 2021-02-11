import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    'nombre'  : ['', [ Validators.required, Validators.minLength(3) ]],
     'precio'   : [, [Validators.required, Validators.min(0)]],
    'cantidad': [, [Validators.required, Validators.min(0)]],
  })

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors &&  this.miFormulario.controls[campo].touched
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  guardarInfo(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }




}
