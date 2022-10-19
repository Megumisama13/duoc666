import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../../services/clase.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private servicio: ClaseService) { }
  clases: any[];
  isModalOpen = false;

  // setOpen(isOpen: boolean) {
  //   this.isModalOpen = isOpen;
  // }

  ngOnInit() {
  }

  AbrirModalClases(isOpen: boolean) {
    this.clases = this.servicio.getClases();
    console.log(this.clases)
    this.isModalOpen = isOpen;
  }

}
