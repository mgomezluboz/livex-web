import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router, private alertService: AlertService) {}
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.error("Hubo un error, lo agarro el interceptor." + err.message);
            console.error(err.message);
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.alertService.snack("Error: Usuario/contraseña inválidos, intente nuevamente.")
                this.authenticationService.logout();
                this.router.navigate(["login"]);
            }
            else if (err.status === 403) {
                this.alertService.snack("Error: No tiene los permisos requeridos para realizar esa accion.")
            }
            else if (err.message == "Http failure response for http://livexws.sa-east-1.elasticbeanstalk.com//espectaculos: 400 OK") {
                this.alertService.snack("Error: Ese espectaculo ya existe.")
            }
            else {
                this.alertService.snack(err.message);
            }
             
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}