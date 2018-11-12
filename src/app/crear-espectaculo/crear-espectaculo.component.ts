import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Funcion } from '../model/funcion';
import { Espectaculo } from '../model/espectaculo';
import { EspectaculosService } from '../espectaculos.service';
import { EstablecimientosService } from '../establecimientos.service';
import { Establecimiento } from '../model/establecimiento';
import { AlertService } from '../alert.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Comercio } from '../model/comercio';
import { ItemComercio } from '../model/item.comercio';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

export interface DialogData {
  setList: string;
}

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
  displayedColumns: string[] = ['fechaHora', 'artista'];
  fileToUpload: File = null;
  imagenChanged: boolean = false;
  imageLink$: Observable<string>;
  private imageLink = new BehaviorSubject<string>("");

  constructor(private especService: EspectaculosService, private location: Location, private route: ActivatedRoute, private estabService: EstablecimientosService, private alertService: AlertService, private dialog: MatDialog) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => this.idParam = params['id']);
    this.estabService.getEstablecimientos().subscribe(estab => this.establecimientos=estab);

    if(this.idParam) {
      this.especService.getEspectaculoById(this.idParam).subscribe(estab => {this.espectaculo = estab; this.espectaculo.funciones.forEach(func => func.fecha = new Date(func.fecha)); this.funciones = this.espectaculo.funciones; this.selectedEstab = this.espectaculo.establecimiento.id;});
      this.imageLink.next(`${environment.baseUrl}espectaculos/${this.idParam}/imagen`);
      this.imageLink$ = this.getImageLink();
    } else {
      this.espectaculo = new Espectaculo();
      let func = new Funcion();
      func.fecha = new Date();
      this.espectaculo.funciones = [func];
      this.funciones = this.espectaculo.funciones;
    }
  }

  getImageLink(): Observable<string> {
    return this.imageLink.asObservable();
  }

  saveEspectaculo(): void {
    if (this.checkHoraFunciones()) {
      this.alertService.snack("Ha ingresado una hora de función inválida, corrijalo antes de proceder.");
      return;
    }

    if (this.checkFechaFunciones()) {
      this.alertService.snack("Ha ingresado una fecha de función anterior a la fecha actual, corrijalo antes de proceder.");
      return;
    }

    if (this.checkPrecio()) {
      this.alertService.snack("Ha ingresado un precio negativo, asegurese que los precios sean valores positivos.");
      return;
    }

    this.espectaculo.establecimiento = this.establecimientos.find(e => e.id == this.selectedEstab);
    if(this.idParam) {
      if (this.imagenChanged) {
        this.especService.putImagen(this.idParam, this.fileToUpload).subscribe();
      }
      this.especService.putEspectaculo(this.espectaculo).subscribe(() => this.goBack());
    } else {
      let idEspec: string;
      this.especService.postEspectaculo(this.espectaculo).subscribe(() => this.goBack());
      //.subscribe(() => this.goBack())
    }
  }

  deleteEspectaculo(): void {
    if (this.idParam) {
      this.especService.deleteEspectaculo(this.espectaculo.id).subscribe(() => this.goBack());
    } else {
      this.goBack();
    }
  }

  editSetList(funcion: Funcion): void {
    const dialogRef = this.dialog.open(SetListDialog, {data: {setList: funcion.setList}});
    dialogRef.afterClosed().subscribe(result => {funcion.setList = result});
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

  setComercios(lista: Comercio[]): void {
    this.espectaculo.comercios = lista;
  }

  deleteComercio(c: Comercio): void {
    const index: number = this.espectaculo.comercios.indexOf(c);
    if(index !== -1) {
      this.espectaculo.comercios.splice(index, 1);
    }
  }

  addComercio(): void {
    let c = new Comercio();
    if (this.espectaculo.comercios == null) {
      this.espectaculo.comercios = [];
    }
    this.espectaculo.comercios.push(c);
  }

  addItem(c: Comercio): void {
    let i = new ItemComercio();
    let comer = this.espectaculo.comercios.find(com => com.nombre == c.nombre);
    if (comer.productos == null) {
      comer.productos = [];
    }
    comer.productos.push(i);
  }

  deleteItem(i: ItemComercio, c: Comercio) {
    let comer = this.espectaculo.comercios.find(com => com.nombre == c.nombre);
    const index: number = comer.productos.indexOf(i);
    if(index !== -1) {
      comer.productos.splice(index, 1);
    }
  }

  handleFileInput(files: FileList) {
    this.imagenChanged = true;
    this.fileToUpload = files.item(0);
    console.info("Se añadio la imagen " + this.fileToUpload.name);
  }

  checkHoraFunciones(): boolean {
    let regex = /[0-2][0-9][0-6][0-9]/;
    for(let func of this.funciones) {
      if (!regex.test(func.hora)) {
        return true;
      }
    }
    return false;
  }

  checkFechaFunciones(): boolean {
    let hoy = new Date();
    hoy.setHours(0,0,0,0);
    for(let func of this.funciones) {
      if (func.fecha.getTime() < hoy.getTime()) {
        return true;
      }
    }
    return false;
  }

  checkPrecio(): boolean {
    for(let comercio of this.espectaculo.comercios) {
      for(let producto of comercio.productos) {
        if (producto.precio < 0) {
          return true;
        }
      }
    }
    return false;
  }

  goBack(): void {
    this.location.back();
  }
}

@Component({
  selector: 'set-list-dialog',
  templateUrl: 'set-list-dialog.html',
})
export class SetListDialog {

  listado:string;

  constructor(
    public dialogRef: MatDialogRef<SetListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.listado = data.setList;
    }

  onNoClick(): void {
    this.dialogRef.close(this.listado);
    console.info("Se noclickeo.");
  }

  close() {
    this.dialogRef.close(this.listado);
  }

}
