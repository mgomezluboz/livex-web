import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEspectaculosComponent } from './listado-espectaculos/listado-espectaculos.component';
import { ListadoEstablecimientosComponent } from './listado-establecimientos/listado-establecimientos.component';
import { CrearEstablecimientoComponent } from './crear-establecimiento/crear-establecimiento.component';
import { CrearEspectaculoComponent } from './crear-espectaculo/crear-espectaculo.component';
import { LoginComponent } from './login/login.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'espectaculos', component: ListadoEspectaculosComponent },
  { path: 'establecimientos', component: ListadoEstablecimientosComponent },
  { path: 'usuarios', component: ListadoUsuariosComponent },
  { path: 'establecimientos/edit', component: CrearEstablecimientoComponent },
  { path: 'espectaculos/edit', component: CrearEspectaculoComponent },
  { path: 'usuarios/edit', component: EditarUsuarioComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
