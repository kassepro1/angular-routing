import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rounting-intro';

  routes = [
    {linkname:'Home',url:'home'},
    {linkname:'Setting',url:'setting'}
  ]
}
