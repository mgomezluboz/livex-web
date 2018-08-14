import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEspectaculosComponent } from './listado-espectaculos/listado-espectaculos.component';
import { ListadoEstablecimientosComponent } from './listado-establecimientos/listado-establecimientos.component';
import { CrearEstablecimientoComponent } from './crear-establecimiento/crear-establecimiento.component';
import { CrearEspectaculoComponent } from './crear-espectaculo/crear-espectaculo.component';

const routes: Routes = [
  { path: '', redirectTo: '/espectaculos', pathMatch: 'full' },
  { path: 'espectaculos', component: ListadoEspectaculosComponent },
  { path: 'establecimientos', component: ListadoEstablecimientosComponent },
  { path: 'establecimientos/edit', component: CrearEstablecimientoComponent },
  { path: 'espectaculos/edit', component: CrearEspectaculoComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
