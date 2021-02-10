import { Component, OnInit } from '@angular/core';

interface menuItem{
  texto:string,
  ruta:string
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  templateMenu: menuItem[]= [
    {
      texto: 'Básicos',
      ruta: '/template-forms/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: '/template-forms/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/template-forms/switches'
    }
  ]

  reactiveMenu: menuItem[]= [
    {
      texto: 'Básicos',
      ruta: '/reactive-forms/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: '/reactive-forms/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/reactive-forms/switches'
    }
  ]

}

