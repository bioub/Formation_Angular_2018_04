import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { TodosComponent } from './todos/todos.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    HorlogeComponent,
    TodosComponent,
    CopyrightComponent,
    ButtonToggleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
