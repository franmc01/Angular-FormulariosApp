import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive-forms',
    loadChildren: () => import('./reactive-forms/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'template-forms',
    loadChildren: () => import('./template-forms/template-forms.module').then(m => m.TemplateFormsModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'template-forms'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
