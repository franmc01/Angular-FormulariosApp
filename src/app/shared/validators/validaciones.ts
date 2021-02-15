import { FormControl, ValidationErrors } from '@angular/forms';
export const nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


//Este metodo es un ejemplo de una validacion personalizada
export function noPuedeSisco(control: FormControl): ValidationErrors | null {
  //Almaceno el valor emitido por el campo
  const valor: string = control?.value.trim().toLowerCase();
  //hago la validacion, por ejemplo
  if (valor === 'sisco') {
    console.log(valor);
    //Error
    return {
      noSisco: true
    }
  } else {
    //En las validaciones si se hace return de un significa todo ok
    return null;
  }
}
