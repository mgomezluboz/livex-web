import { Injectable } from '@angular/core';
import { Establecimiento } from './model/establecimiento';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosService {

  //baseIp = "http://192.168.0.86:8080/establecimientos";
  baseIp = "http://127.0.0.1:8080/establecimientos";

  constructor(private http: HttpClient) { }

  getEstablecimientos(): Observable<Establecimiento[]> {
    return this.http.get<Establecimiento[]>(this.baseIp).pipe(catchError(this.handleError));
  }

  getEstablecimientoById(id: string): Observable<Establecimiento> {
    const url = `${this.baseIp}/${id}`;
    return this.http.get<Establecimiento>(url).pipe(catchError(this.handleError));
  }

  postEstablecimiento(e: Establecimiento):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post(this.baseIp, e, httpOptions).pipe(catchError(this.handleError));
  }

  putEstablecimiento(e: Establecimiento):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.put(this.baseIp, e, httpOptions).pipe(catchError(this.handleError));
  }

  deleteEstablecimiento(id: string):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    const url = `${this.baseIp}/${id}`;
    return this.http.delete(url, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
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
  };
}
