import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal
  nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  //Este metodo ee un ejemplo de una validacion personalizada
  noPuedeSisco(control:FormControl){
    //Almaceno el valor emitido por el campo
    const valor:string = control?.value.trim().toLowerCase();
    //hago la validacion, por ejemplo
    if(valor === 'sisco'){
      console.log(valor);
      //Error
      return {
        noSisco: true
      }
    }else{
      //En las validaciones si se hace return de un significa todo ok
      return null;
    }
  }

  formularioRegistro: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    correo: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: [ '', [Validators.required, this.noPuedeSisco]]
  });

  constructor(private fb: FormBuilder) { }

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
