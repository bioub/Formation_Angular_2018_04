import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';

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
  ],
  exports: [
    NavbarComponent, // rend la navbar utilisable
    // dans AppModule qui importe ce module
  ],
})
export class CoreModule { }
