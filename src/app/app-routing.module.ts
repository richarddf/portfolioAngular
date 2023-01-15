import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { GuardianGuard } from './servicios/guardian.guard';

const routes: Routes = [
  {path:'',component: IndexComponent, canActivate: [GuardianGuard]},
  {path:'login', component: ModalLoginComponent},
  {path:'**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
