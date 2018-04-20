import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private title: Title,
    private router: Router,
  ) {}

  ngOnInit() {
    // change le titre par rapport à la clé data.title du routerConfig
    // TODO Faire ça un service (RouterTitleService)
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        if (!event.snapshot.children.length && event.snapshot.data.title) {
          this.title.setTitle(event.snapshot.data.title);
        }
      }
    });
  }
}
