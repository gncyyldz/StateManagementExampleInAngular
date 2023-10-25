import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonStateManagementService {

  constructor() { }

  persons: WritableSignal<{ name: string, surname: string }[]> = signal([]);
  createPerson(name: string, surname: string) {
    this.persons.mutate(datas => datas.push({
      name: name, surname: surname
    }))
  }

  getPersons() {
    return this.persons();
  }
}
