import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.setLoading(true);
    return next.handle(httpRequest).pipe(
      tap((response) => {
        if (response.type) {
          this.handleResponse(response);
        }
      }),
      catchError((error) => this.handleError(error))
    );
  }

  handleResponse = (response: HttpEvent<any>) => {
    this.loadingService.setLoading(false);
  };

  handleError = (error) => {
    this.loadingService.setLoading(false);
    return of(error);
  };
}
