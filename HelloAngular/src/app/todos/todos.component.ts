import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: []
})
export class TodosComponent implements OnInit {

  public newTodo = 'dnkjdghj';
  public doneAll = false;
  public todos = [
    {
      done: false,
      value: 'Item 1',
    },
    {
      done: true,
      value: 'Item 2',
    }
  ];

  /*
    1 - Afficher la valeur de la todo
    et cocher la case si done est à true

    2 - Au clic du bouton -
    Supprimer l'élément associé du tableau
    (MDN Array.prototype.splice)

    3 - Toggle All
    Au changement de valeur de la checkbox
    du haut, tout cocher ou décocher
  */

  constructor() { }

  ngOnInit() {
    
  }

  remove(todo) {
    const i = this.todos.indexOf(todo);
    this.todos.splice(i, 1);
  }

  toggleAll(doneAll) {
    this.doneAll = doneAll;
    this.todos.forEach((todo) => todo.done = doneAll);
  }
}
