import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Espectaculo } from './model/espectaculo';
import { AlertService } from './alert.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspectaculosService {

  //baseIp = "http://192.168.0.86:8080/espectaculos";
  serverIp: string = environment.baseUrl;
  baseIp = this.serverIp + "/espectaculos";

  constructor(private http: HttpClient, private alertService: AlertService) { }

  getEspectaculos(): Observable<Espectaculo[]> {
    return this.http.get<Espectaculo[]>(this.baseIp);//.pipe(catchError(this.handleError));
  }

  getEspectaculoById(id: string): Observable<Espectaculo> {
    const url = `${this.baseIp}/${id}`;
    return this.http.get<Espectaculo>(url);//.pipe(catchError(this.handleError));
  }

  postEspectaculo(e: Espectaculo):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post(this.baseIp, e, httpOptions);//.pipe(catchError(this.handleError));
  }

  putEspectaculo(e: Espectaculo):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.put(this.baseIp, e, httpOptions);//.pipe(catchError(this.handleError));
  }

  deleteEspectaculo(id: string):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    const url = `${this.baseIp}/${id}`;
    return this.http.delete(url, httpOptions);//.pipe(catchError(this.handleError));
  }

  putImagen(id:string, file: File):Observable<any> {
    //const httpOptions = {};
    const url = `${this.baseIp}/${id}/imagen`;
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.put(url, formData);
  }

  /*private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message); // A client-side or network error occurred.
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'); // return an observable with a user-facing error message
  };*/
  
}
