import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  title: string;
  constructor(
    activatedRoute: ActivatedRoute,
    router: Router,
    documentTitle: Title
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = activatedRoute.snapshot;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.title = route.data['title'];
        documentTitle.setTitle(`Bossofin - ${route.data['title']}`);
      }
    });
  }
  ngOnInit(): void {}
}
