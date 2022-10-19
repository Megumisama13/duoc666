import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { v4 } from 'uuid';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  //DOS VARIABLES PARA EL CÓDIGO QR
  elementType ='canvas'; //url - img - canvas
  value = '' //abrira este link



  constructor() { }

  ngOnInit() {

  }

  //Metodo para generar el codigo unico para cada QR:

  generarCodigo(){
    if(this.value==''){
      this.value = v4();
    }

  }

}
