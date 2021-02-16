import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

    //Este metodo es un ejemplo de una validacion personalizada
    noPuedeSisco(control:FormControl): ValidationErrors | null{
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


    camposIguales(campo1:string, campo2:string){

      return (formGroup:AbstractControl): ValidationErrors | null =>{
        const pass1 = formGroup.get(campo1)?.value;
        const pass2 = formGroup.get(campo2)?.value;

        if(pass1 !== pass2){
          formGroup.get(campo2)?.setErrors({camposNoIguales:true})
          return { camposNoIguales: true }
        }
        formGroup.get(campo2)?.setErrors(null)
        return null;
      }
    }

    passwordIguales(pass1Name:string, pass2Name:string){
      return (miFormulario:FormGroup)=>{
        const pass1Control=miFormulario.controls[pass1Name];
        const pass2Control=miFormulario.controls[pass2Name];

        if(pass1Control===pass2Control){
           pass2Control.setErrors(null);
        }else{
          pass2Control.setErrors({camposNoSonIguales:true})
        }
      }
    }
}
