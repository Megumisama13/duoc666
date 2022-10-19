import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  //variable:
  clases: any[] = [
    {
      id_clase: '1',
      nombre: 'Inglés',
      sigla: 'INI-2111',
      //poner profesor de otro lao
    },{
      id_clase: '2',
      nombre: 'jESUSITO',
      sigla: 'PFC-0101',
      //poner profesor de otro lao
    }
  ];

  constructor() { }

  //métodos:
  getClase(id_clase) {
    return this.clases.find(cla => cla.id_clase == id_clase);
  }

  getClases() {
    return this.clases;
  }
}
