import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoEspectaculosComponent } from './listado-espectaculos/listado-espectaculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormField, MatFormFieldModule, MatInputModule, MatTableModule, MatSelectModule, MatDatepickerModule, MatCardModule, MatNativeDateModule, MatSnackBarModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { ListadoEstablecimientosComponent } from './listado-establecimientos/listado-establecimientos.component';
import { AppRoutingModule } from './/app-routing.module';
import { CrearEstablecimientoComponent } from './crear-establecimiento/crear-establecimiento.component';
import { CrearEspectaculoComponent, SetListDialog } from './crear-espectaculo/crear-espectaculo.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AlertComponent } from './alert/alert.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEspectaculosComponent,
    NavBarComponent,
    ListadoEstablecimientosComponent,
    CrearEstablecimientoComponent,
    CrearEspectaculoComponent,
    LoginComponent,
    AlertComponent,
    ListadoUsuariosComponent,
    EditarUsuarioComponent,
    SetListDialog
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
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  entryComponents: [
    SetListDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
