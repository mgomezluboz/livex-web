import { Component, OnInit } from '@angular/core';
import { Establecimiento } from '../model/establecimiento';
import { EstablecimientosService } from '../establecimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-establecimientos',
  templateUrl: './listado-establecimientos.component.html',
  styleUrls: ['./listado-establecimientos.component.css']
})
export class ListadoEstablecimientosComponent implements OnInit {

  establecimientos: Establecimiento[];

  constructor(private estabService: EstablecimientosService, private router: Router) { 
    
  }

  ngOnInit() {
    this.getEstablecimientos();
  }

  getEstablecimientos(): void {
    this.estabService.getEstablecimientos().subscribe(estab => this.establecimientos = estab);
  }

  goTo(e: Establecimiento) {
    console.info("Se selecciono id " + e.id);
    this.router.navigate(['/establecimientos/edit'], {queryParams:{id:e.id}});
  }

}
