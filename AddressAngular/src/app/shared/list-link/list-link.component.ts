import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ad-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.scss']
})
export class ListLinkComponent implements OnInit {

  @Input() items;
  @Input() bindLabel;
  @Input() bindId;

  constructor() { }

  ngOnInit() {
  }

}
