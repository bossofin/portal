import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'h-100 row m-0',
  },
})
export class HomeComponent implements OnInit {
  toggleMenu: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.toggleMenu = window.innerWidth > 1024;
    const userName = sessionStorage.getItem('userName');
    if (!userName) {
      sessionStorage.clear();
      this.router.navigateByUrl('/auth');
      return;
    }
  }
  onToggleMenu(value: boolean) {
    this.toggleMenu = value || !this.toggleMenu;
  }
}
