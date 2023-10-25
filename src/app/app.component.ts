import { Component } from '@angular/core';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

@Component({
  selector: 'app-root',
  template: `
    <app-create-person></app-create-person>
    <hr>
    <app-list-person></app-list-person>
  `,
  standalone: true,
  imports: [CreatePersonComponent, ListPersonComponent]
})
export class AppComponent {

}
