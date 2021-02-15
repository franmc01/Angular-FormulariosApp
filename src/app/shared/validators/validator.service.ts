import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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
}
