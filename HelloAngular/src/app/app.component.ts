import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-horloge></app-horloge>
    <app-todos></app-todos>
    <app-copyright [company]="'Klanik'"></app-copyright>
    <app-copyright company="Klanik"></app-copyright>
    <app-button-toggle></app-button-toggle>
    <!--
    <app-button-toggle (selectionChange)="selectedValue = $event" [values]="['Bleu', 'Blanc', 'Rouge']"></app-button-toggle>
    -->
    <app-button-toggle [(selection)]="selectedValue" [values]="['Bleu', 'Blanc', 'Rouge']"></app-button-toggle>

    <div>
      Selected value : {{selectedValue}}
    </div>
  `,
})
export class AppComponent {
  public selectedValue = 'Rouge';
}
