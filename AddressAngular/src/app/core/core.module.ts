import { BaseUrlInterceptor } from './base-url.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactService } from './contact.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, // pour tous les HttpClient
    RouterModule, // pour [routerLink]
  ],
  declarations: [
    NavbarComponent,
  ],
  providers: [
    // {provide: ContactService, useClass: ContactService},
    // en raccourci :
    ContactService,

    // Interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
  exports: [
    NavbarComponent, // rend la navbar utilisable
    // dans AppModule qui importe ce module
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
