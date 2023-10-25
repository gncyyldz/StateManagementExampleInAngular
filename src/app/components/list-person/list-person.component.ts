import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonStateManagementService } from 'src/app/services/person-state-management.service';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let person of persons">{{person.name}} {{person.surname}}</li>
    </ul>
  `,
})
export class ListPersonComponent implements OnInit {
  personStateManagementService: PersonStateManagementService = inject(PersonStateManagementService);


  persons: { name: string, surname: string }[];
  ngOnInit() {
    this.persons = this.personStateManagementService.getPersons()
  }
}
