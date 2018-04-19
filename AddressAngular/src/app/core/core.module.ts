import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent, // rend la navbar utilisable
    // dans AppModule qui importe ce module
  ],
})
export class CoreModule { }
