import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  juegosFavoritos: Favoritos[]
}

interface Favoritos {
  id: number
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  nuevoJuego: string = '';
  @ViewChild('formularioDinamico') formularioDinamico!: NgForm

  get nombreInvalido() {
    return this.formularioDinamico?.controls.nombrePersona?.invalid && this.formularioDinamico?.controls.nombrePersona?.touched;
  }

  persona: Persona = {
    nombre: '',
    juegosFavoritos: []
  }

  guardar() {
    console.log('Posteo');
  }

  eliminar(i: number) {
    this.persona.juegosFavoritos.splice(i, 1)
  }

  addJuego() {
    const nuevoFavorito: Favoritos = {
      id: this.persona.juegosFavoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.juegosFavoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

}
