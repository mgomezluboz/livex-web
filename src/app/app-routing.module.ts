import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEspectaculosComponent } from './listado-espectaculos/listado-espectaculos.component';
import { ListadoEstablecimientosComponent } from './listado-establecimientos/listado-establecimientos.component';

const routes: Routes = [
  { path: 'espectaculos', component: ListadoEspectaculosComponent },
  { path: 'establecimientos', component: ListadoEstablecimientosComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
