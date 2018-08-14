import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoEspectaculosComponent } from './listado-espectaculos/listado-espectaculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormField, MatFormFieldModule, MatInputModule, MatTableModule, MatSelectModule } from '@angular/material';
import { ListadoEstablecimientosComponent } from './listado-establecimientos/listado-establecimientos.component';
import { AppRoutingModule } from './/app-routing.module';
import { CrearEstablecimientoComponent } from './crear-establecimiento/crear-establecimiento.component';
import { CrearEspectaculoComponent } from './crear-espectaculo/crear-espectaculo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEspectaculosComponent,
    NavBarComponent,
    ListadoEstablecimientosComponent,
    CrearEstablecimientoComponent,
    CrearEspectaculoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
