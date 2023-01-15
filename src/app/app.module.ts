import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalAcercadeComponent } from './modales/modal-acercade/modal-acercade.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadComponent } from './modales/modal-habilidad/modal-habilidad.component';
import { ModalProyectoComponent } from './modales/modal-proyecto/modal-proyecto.component';
import { ModalEducacionAddComponent } from './modales/modal-educacion-add/modal-educacion-add.component';
import { ModalExperienciaAddComponent } from './modales/modal-experiencia-add/modal-experiencia-add.component';
import { ModalHabilidadAddComponent } from './modales/modal-habilidad-add/modal-habilidad-add.component';
import { ModalProyectoAddComponent } from './modales/modal-proyecto-add/modal-proyecto-add.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { PersonaService } from './servicios/persona.service';
import { InterceptorInterceptor } from './servicios/interceptor.interceptor';

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
    IndexComponent,
    Pagina404Component,
    ModalLoginComponent,
    ModalAcercadeComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalHabilidadComponent,
    ModalProyectoComponent,
    ModalEducacionAddComponent,
    ModalExperienciaAddComponent,
    ModalHabilidadAddComponent,
    ModalProyectoAddComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [PersonaService, { provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
