import { ValidatorService } from './../../shared/validators/validator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern } from '../../shared/validators/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  formularioRegistro: FormGroup = this.fb.group({
    nombre: ['Francisco Marin', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    correo: ['f@f.com', [Validators.required, Validators.pattern(emailPattern)]],
    username: [ 'NoSisco', [Validators.required, this.vs.noPuedeSisco]]
  });

  constructor(private fb: FormBuilder, private vs:ValidatorService) { }

  ngOnInit(): void {
  }


  campoNoValido(campo:string){
    return this.formularioRegistro.get(campo)?.invalid && this.formularioRegistro.get(campo)?.touched;
  }

  submitFormulario(){
    if(this.formularioRegistro.invalid){
      this.formularioRegistro.markAllAsTouched();
    return;
  }
  }
}
