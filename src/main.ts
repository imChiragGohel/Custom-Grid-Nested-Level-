import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CustomGridComponent } from './cutom-grid/custom-grid.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Hello from {{ name }}!</h1>
//     <a target="_blank" href="https://angular.dev/overview">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App {
//   name = 'Angular';
// }

bootstrapApplication(CustomGridComponent);
