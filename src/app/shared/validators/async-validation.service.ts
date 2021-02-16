import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsyncEmailValidationService implements AsyncValidator{

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`).pipe(

    //Forma tradicional
      // map( resp=>{
      //   if(resp.length === 0){
      //     return null;
      //   }else{
      //     return { emailTomado: true }
      //   }
      // }),
      delay(2500),
      //Buenas practicas
      map( resp=>{
          return ( resp.length === 0 ) ? null : { emailTomado: true }
      })
    );
  }
}
