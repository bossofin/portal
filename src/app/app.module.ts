import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { AuthGuard } from '@global-services/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from '@global-services/global.interceptor';
import { PreLoaderModule } from '@pre-loader/pre-loader.module';
import { GlobalStore } from '@store/global.store';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getTurkishPaginatorIntl } from '@custom-utils/paginator-localization.util';
registerLocaleData(localeTr);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PreLoaderModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true,
    },
    GlobalStore,
    { provide: MatPaginatorIntl, useValue: getTurkishPaginatorIntl() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
