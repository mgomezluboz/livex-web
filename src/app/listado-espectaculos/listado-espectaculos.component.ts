import { Component, OnInit } from '@angular/core';
import { Espectaculo } from '../model/espectaculo';
import { Funcion } from '../model/funcion';
import { Establecimiento } from '../model/establecimiento';
import { EspectaculosService } from '../espectaculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-espectaculos',
  templateUrl: './listado-espectaculos.component.html',
  styleUrls: ['./listado-espectaculos.component.css']
})
export class ListadoEspectaculosComponent implements OnInit {

  espectaculos: Espectaculo[];

  constructor(private especService: EspectaculosService, private router: Router) { 
  }

  ngOnInit() {
    this.especService.getEspectaculos().subscribe(espec => this.espectaculos = espec);
  }

  goTo(e: Espectaculo) {
    this.router.navigate(['/espectaculos/edit'], {queryParams:{id:e.id}});
  }

  addEspectaculo(e: Espectaculo):void {
    this.espectaculos = this.espectaculos.concat(e);
  }

}
