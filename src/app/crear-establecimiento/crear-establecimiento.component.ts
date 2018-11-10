import { Component, OnInit } from '@angular/core';
import { Establecimiento } from '../model/establecimiento';
import { EstablecimientosService } from '../establecimientos.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-crear-establecimiento',
  templateUrl: './crear-establecimiento.component.html',
  styleUrls: ['./crear-establecimiento.component.css']
})
export class CrearEstablecimientoComponent implements OnInit {

  idParam: string = null;
  establecimiento: Establecimiento;

  constructor(private estabService: EstablecimientosService, private location: Location, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.idParam = params['id']);
    
    if(this.idParam) {
      this.estabService.getEstablecimientoById(this.idParam).subscribe(estab => this.establecimiento = estab);
    } else {
      this.establecimiento = new Establecimiento();
    }
  }

  saveEstablecimiento(): void {
    if (this.checkCapacidadNoNegativa()) {
      this.alertService.snack("La capacidad del establecimiento no puede ser nula o negativa.");
      return;
    }

    if(this.idParam) {
      this.estabService.putEstablecimiento(this.establecimiento).subscribe(() => this.goBack());
    } else {
      this.estabService.postEstablecimiento(this.establecimiento).subscribe(() => this.goBack());
    }
  }

  deleteEstablecimiento(): void {
    if (this.idParam) {
      this.estabService.deleteEstablecimiento(this.establecimiento.id).subscribe(() => this.goBack());
    } else {
      this.goBack();
    }
  }

  checkCapacidadNoNegativa(): boolean {
    if (this.establecimiento.capacidad <= 0) {
      return true;
    }

    return false;
  }

  goBack(): void {
    this.location.back();
  }

}
