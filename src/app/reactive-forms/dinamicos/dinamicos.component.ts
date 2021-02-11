import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

        //Forma 1
      // this.fb.control('Death Stranding', Validators.required),
      //Forma 2
      // ['Metal Gear', Validators.required],
  miFormularioDinamico : FormGroup = this.fb.group({
    nombrePersona: [ '', [Validators.required, Validators.min(3)] ],
    favoritos: this.fb.array([] , Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get campoNoValido(){
    return this.miFormularioDinamico.controls.nombrePersona.errors
           && this.miFormularioDinamico.controls.nombrePersona.touched;
  }

  //Obtener la logitud de formcontrol dentro de un form array
  get favoritosArr(){
    return this.miFormularioDinamico.get('favoritos') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.miFormularioDinamico.invalid){
      console.log('Formulario invalido');
      this.miFormularioDinamico.markAllAsTouched()
      return;
    }
    console.log(this.miFormularioDinamico.value);
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) { return; }

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrarFavorito(i:number){
    this.favoritosArr.removeAt(i);
  }

}
