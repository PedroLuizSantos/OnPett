import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user.guard';

const routes: Routes = [

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren:() => import('./registro/registro.module').then(m => m.RegistroModule) },
  { path: 'acesso', canActivate: [UserGuard], loadChildren: () => import('./acesso/acesso.module').then(m => m.AcessoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
