import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'modal-intento',
  templateUrl: 'recuperar.page.html',
})

export class RecuperarPage {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private alertController: AlertController) {}

  async correoEnviado() {
    const alert = await this.alertController.create({
      header: 'Aviso:',
      message: 'El correo ha sido reenviado a la direccion ingresada',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}