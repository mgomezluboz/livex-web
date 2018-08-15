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
  displayedColumns: string[] = ['fechaHora', 'artista']

  constructor(private especService: EspectaculosService, private location: Location, private route: ActivatedRoute, private estabService: EstablecimientosService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => this.idParam = params['id']);
    this.estabService.getEstablecimientos().subscribe(estab => this.establecimientos=estab);

    if(this.idParam) {
      this.especService.getEspectaculoById(this.idParam).subscribe(estab => {this.espectaculo = estab; this.espectaculo.funciones.forEach(func => func.fecha = new Date(func.fecha)); this.funciones = this.espectaculo.funciones; this.selectedEstab = this.espectaculo.establecimiento.id;});
    } else {
      this.espectaculo = new Espectaculo();
      let func = new Funcion();
      func.fecha = new Date();
      this.espectaculo.funciones = [func];
    }

  }
  saveEspectaculo(): void {
    this.espectaculo.establecimiento = this.establecimientos.find(e => e.id == this.selectedEstab);
    if(this.idParam) {
      this.especService.putEspectaculo(this.espectaculo).subscribe(() => this.goBack());
    } else {
      this.especService.postEspectaculo(this.espectaculo).subscribe(() => this.goBack());
    }
  }

  addFuncion(): void {
    let func = new Funcion();
    func.fecha = new Date();
    this.funciones.push(func);
  }

  deleteFuncion(f: Funcion): void {
    const index: number = this.funciones.indexOf(f);
    if(index !== -1) {
      this.funciones.splice(index, 1);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
