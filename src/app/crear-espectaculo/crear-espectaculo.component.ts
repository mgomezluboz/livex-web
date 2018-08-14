import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Funcion } from '../model/funcion';
import { Espectaculo } from '../model/espectaculo';
import { EspectaculosService } from '../espectaculos.service';
import { EstablecimientosService } from '../establecimientos.service';
import { Establecimiento } from '../model/establecimiento';

@Component({
  selector: 'app-crear-espectaculo',
  templateUrl: './crear-espectaculo.component.html',
  styleUrls: ['./crear-espectaculo.component.css']
})
export class CrearEspectaculoComponent implements OnInit {

  idParam: string = null;
  funciones: Funcion[];
  espectaculo: Espectaculo;
  selectedEstab: string;
  establecimientos: Establecimiento[];
  columnsToDisplay = ['fechaHora', 'artista']

  constructor(private especService: EspectaculosService, private location: Location, private route: ActivatedRoute, private estabService: EstablecimientosService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => this.idParam = params['id']);
    this.estabService.getEstablecimientos().subscribe(estab => this.establecimientos=estab);

    if(this.idParam) {
      this.especService.getEspectaculoById(this.idParam).subscribe(estab => {this.espectaculo = estab; this.funciones = this.espectaculo.funciones; this.selectedEstab = this.espectaculo.establecimiento.id;});
    } else {
      this.espectaculo = new Espectaculo();
      this.funciones = [];
    }

  }
  saveEspectaculo(): void {
    /*if(this.idParam) {
      this.especService.putEspectaculo(this.espectaculo).subscribe(() => this.goBack());
    } else {
      this.especService.postEspectaculo(this.espectaculo).subscribe(() => this.goBack());
    }*/
    this.espectaculo.establecimiento = this.establecimientos.find(estab => estab.id == this.selectedEstab);
    console.info("Info de esta: " + this.espectaculo.establecimiento.id + " con nombre " + this.espectaculo.establecimiento.nombre);
  }

  goBack(): void {
    this.location.back();
  }
}
