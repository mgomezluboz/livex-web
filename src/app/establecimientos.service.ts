import { Injectable } from '@angular/core';
import { Establecimiento } from './model/establecimiento';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosService {

  //baseIp = "http://192.168.0.86:8080/establecimientos";
  serverIp: string = environment.baseUrl;
  baseIp = this.serverIp + "/establecimientos";

  constructor(private http: HttpClient) { }

  getEstablecimientos(): Observable<Establecimiento[]> {
    return this.http.get<Establecimiento[]>(this.baseIp);
  }

  getEstablecimientoById(id: string): Observable<Establecimiento> {
    const url = `${this.baseIp}/${id}`;
    return this.http.get<Establecimiento>(url);
  }

  postEstablecimiento(e: Establecimiento):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post(this.baseIp, e, httpOptions);
  }

  putEstablecimiento(e: Establecimiento):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.put(this.baseIp, e, httpOptions);
  }

  deleteEstablecimiento(id: string):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    const url = `${this.baseIp}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
