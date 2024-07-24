// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tabs',
//   standalone: true,
//   imports: [],
//   templateUrl: './tabs.component.html',
//   styleUrl: './tabs.component.css'
// })
// export class TabsComponent {

// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  title = 'first-app';
}