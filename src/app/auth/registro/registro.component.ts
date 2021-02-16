import { ValidatorService } from './../../shared/validators/validator.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern } from '../../shared/validators/validaciones';
import { AsyncEmailValidationService } from '../../shared/validators/async-validation.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //Mi formulario
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

  constructor(private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidation: AsyncEmailValidationService) { }


  // Getters

  // get pass2NoValido() {
  //   const pass1 = this.formularioRegistro.get('password')?.value;
  //   const pass2 = this.formularioRegistro.get('confirmPassword')?.value;
  //   return (pass1 === pass2) ? false : true;
  // }





  //Métodos

  //Sirve para validar n campos y comprobar si son válidos
  campoNoValido(campo: string) {
    return this.formularioRegistro.get(campo)?.invalid && this.formularioRegistro.get(campo)?.touched;
  }


  //Estos métodos de aqui, es una de las formas que existe para mostrar mensajes de error de forma condicional, es decir dependiendo del error de validación que el campo X este infringiendo

  //Validar required
  // emailRequerido(){
  //   return this.formularioRegistro.get('correo')?.errors?.required && this.formularioRegistro.get('correo')?.touched;
  // }

  // Validar correo válido
  // emailValido(){
  //   return this.formularioRegistro.get('correo')?.errors?.pattern && this.formularioRegistro.get('correo')?.touched;
  // }

  //Validar correo que sea unico, en base a una validacion asincronoa BD
  // emailUnico(){
  //   return this.formularioRegistro.get('correo')?.errors?.emailTomado && this.formularioRegistro.get('correo')?.touched;
  // }


  //Forma N° 2 de hacer lo mismo que esta arrriba
  get showErrors(): string {
    const errors = this.formularioRegistro.get('correo')?.errors;
    if (errors?.required) {
      return 'El campo correo es obligatorio'
    } else if (errors?.pattern) {
      return 'El correo ingresado tiene un formato inválido'
    } else if (errors?.emailTomado) {
      return ' El correo ingresado ya fue registrado'
    }

    return '';
  }



  //Sirve para postear la información una vez que todo el formulario es válido
  submitFormulario() {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      return;
    }
  }
}
