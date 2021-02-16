import { ValidatorService } from './../../shared/validators/validator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern } from '../../shared/validators/validaciones';
import { AsyncEmailValidationService } from '../../shared/validators/async-validation.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  formularioRegistro: FormGroup = this.fb.group({
    nombre: ['Francisco Marin', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    correo: ['', [Validators.required, Validators.pattern(emailPattern)], [this.emailValidation]],
    username: ['NoSisco', [Validators.required, this.vs.noPuedeSisco]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['123456', [Validators.required]]
  }, {
    validators: [this.vs.camposIguales('password', 'confirmPassword')]
    //Segunda forma de hacerlo
    // validators: [this.vs.passwordIguales('password', 'confirmPassword')]
  });

  constructor(private fb: FormBuilder, private vs: ValidatorService, private emailValidation: AsyncEmailValidationService) { }

  // get pass2NoValido() {
  //   const pass1 = this.formularioRegistro.get('password')?.value;
  //   const pass2 = this.formularioRegistro.get('confirmPassword')?.value;
  //   return (pass1 === pass2) ? false : true;
  // }

  ngOnInit(): void {
  }


  campoNoValido(campo: string) {
    return this.formularioRegistro.get(campo)?.invalid && this.formularioRegistro.get(campo)?.touched;
  }

  submitFormulario() {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      return;
    }
  }
}
