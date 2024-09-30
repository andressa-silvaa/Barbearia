import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [RouterModule, CommonModule]
})
export class NavComponent {
  activeLink: string = 'sobre';
  linkClicado: boolean = false;
  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          this.setActiveLink(tree.fragment);
          const element = document.getElementById(tree.fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  setActiveLink(fragment: string) {
    this.activeLink = fragment;
    this.linkClicado = false;
  }
  abrirMenu(){
    this.linkClicado = true;
  }
}
