import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
  <h1> Angular CI Example! </h1>
  <nav>
    <a routerLink="/red">RED</a>
    <p>  </p>
    <a routerLink="/blue">BLUE</a>
    <p> </P
    <a routerLink="/auth">Auth</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'demo-red-blue';
}
