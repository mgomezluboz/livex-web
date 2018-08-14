import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Espectaculo } from './model/espectaculo';

@Injectable({
  providedIn: 'root'
})
export class EspectaculosService {

  baseIp = "http://192.168.0.86:8080/espectaculos";

  constructor(private http: HttpClient) { }

  getEspectaculos(): Observable<Espectaculo[]> {
    return this.http.get<Espectaculo[]>(this.baseIp).pipe(catchError(this.handleError));
  }

  getEspectaculoById(id: string): Observable<Espectaculo> {
    const url = `${this.baseIp}/${id}`;
    return this.http.get<Espectaculo>(url).pipe(catchError(this.handleError));
  }

  postEspectaculo(e: Espectaculo):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post(this.baseIp, e, httpOptions).pipe(catchError(this.handleError));
  }

  putEspectaculo(e: Espectaculo):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.put(this.baseIp, e, httpOptions).pipe(catchError(this.handleError));
  }

  deleteEspectaculo(id: string):Observable<any> {
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
