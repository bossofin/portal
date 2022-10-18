import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, of, map } from 'rxjs';
import { GlobalStore } from '@store/global.store';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  private cache: { [key: string]: HttpResponse<any> } = {};
  constructor(private globalStore: GlobalStore) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json; charset=utf8',
      },
    });
    const isChacheable = newRequest.headers.get('cache');
    if (isChacheable) {
      const isCached = this.cache[newRequest.urlWithParams];
      if (isCached) {
        return of(isCached.clone());
      }
    }
    setTimeout(() => {
      this.globalStore.patchState({
        isLoading: true,
      });
    });
    return next.handle(newRequest).pipe(
      map((httpEvent) => {
        if (httpEvent instanceof HttpResponse) {
          const isChacheable = newRequest.headers.get('cache');
          if (isChacheable) {
            this.cache[newRequest.urlWithParams] = httpEvent.clone();
          }
        }
        return httpEvent;
      }),
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
