import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalLoginComponent } from './componentes/modal-login/modal-login.component';
import { ModalAcercadeComponent } from './componentes/modal-acercade/modal-acercade.component';
import { ModalExperienciaComponent } from './componentes/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './componentes/modal-educacion/modal-educacion.component';
import { ModalHabilidadesComponent } from './componentes/modal-habilidades/modal-habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercadeComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    ModalLoginComponent,
    ModalAcercadeComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalHabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
