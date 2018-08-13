import { Component, OnInit } from '@angular/core';
import { Establecimiento } from '../model/establecimiento';

@Component({
  selector: 'app-listado-establecimientos',
  templateUrl: './listado-establecimientos.component.html',
  styleUrls: ['./listado-establecimientos.component.css']
})
export class ListadoEstablecimientosComponent implements OnInit {

  establecimientos: Establecimiento[];

  constructor() { 
    this.establecimientos = [new Establecimiento("Auditorio Sur"),new Establecimiento("Gran Rex")];
  }

  ngOnInit() {

    

  }

}
