import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListLinkComponent } from './list-link/list-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ListLinkComponent],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,

    ListLinkComponent,
  ]
})
export class SharedModule { }
