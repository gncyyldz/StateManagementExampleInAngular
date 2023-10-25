import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonStateManagementService } from 'src/app/services/person-state-management.service';

@Component({
  selector: 'app-create-person',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="text" #txtName placeholder="Name"> <br>
    <input type="text" #txtSurname placeholder="Surname"> <br>
    <button (click)="createPerson(txtName.value, txtSurname.value)">Create Person</button>
  `,
})
export class CreatePersonComponent {
  personStateManagementService: PersonStateManagementService = inject(PersonStateManagementService);
  createPerson(name: string, surname: string) {
    this.personStateManagementService.createPerson(name, surname);
  }
}
