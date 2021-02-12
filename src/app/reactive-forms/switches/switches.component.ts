import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: 'F',
    notificaciones: true
  }

  miformularioSwitch: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miformularioSwitch.reset({
      ...this.persona,
      condiciones: false
    });

    //RXJS

    //Subscripcion a un campo en especifico
    // this.miformularioSwitch.get('condiciones')?.valueChanges.subscribe(valordelcampo =>{
    //   console.log('Valor del campo condiciones: ', valordelcampo);
    // })

    //Subscripcion a todo mi formulario
    // this.miformularioSwitch.valueChanges.subscribe(({condiciones, ...demascampos})=>{
    this.miformularioSwitch.valueChanges.subscribe(form => {
      // delete form.condiciones;
      const { genero, notificaciones } = form;
      this.persona = { genero, notificaciones };
      //this.persona = demascampos;
      // this.persona = form
      // console.log('Persona:', this.persona);
    })
  }


  guardar() {
    const formValue = { ...this.miformularioSwitch.value };
    delete formValue.condiciones;

    this.persona = formValue;

    console.log(formValue);
  }

}
