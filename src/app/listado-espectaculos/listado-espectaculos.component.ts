import { Component, OnInit } from '@angular/core';
import { Espectaculo } from '../model/espectaculo';
import { Funcion } from '../model/funcion';
import { Establecimiento } from '../model/establecimiento';

@Component({
  selector: 'app-listado-espectaculos',
  templateUrl: './listado-espectaculos.component.html',
  styleUrls: ['./listado-espectaculos.component.css']
})
export class ListadoEspectaculosComponent implements OnInit {

  espectaculos: Espectaculo[];

  constructor() { 
    this.espectaculos = [];
  }

  ngOnInit() {

    let fecha1: Funcion = new Funcion(new Date(), "Nirvana", new Establecimiento("Auditorio Sur"));
    let lolla: Espectaculo = new Espectaculo("Lollapalooza");
    let personalFest: Espectaculo = new Espectaculo("Personal Fest");

    lolla.addFuncion(fecha1);
    personalFest.addFuncion(fecha1);

    this.addEspectaculo(lolla);
    this.addEspectaculo(personalFest);
  }

  addEspectaculo(e: Espectaculo):void {
    this.espectaculos = this.espectaculos.concat(e);
  }

}
