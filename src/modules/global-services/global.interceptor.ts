import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, of } from 'rxjs';
import { GlobalStore } from '@store/global.store';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor(private globalStore: GlobalStore) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }),
    });
    setTimeout(() => {
      this.globalStore.patchState({
        isLoading: true,
      });
    });
    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error.message);
        return of();
      }),
      finalize(() => {
        setTimeout(() => {
          this.globalStore.patchState({
            isLoading: false,
          });
        });
      })
    );
  }
}
