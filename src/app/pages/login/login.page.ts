import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: string = "Desconocido";
  clave: string = "";


  constructor(public toastController: ToastController, private router: Router, private alertController: AlertController) { }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  pasarDatos() {
    let navigationExtras: NavigationExtras = {
      state: {
        usu: this.usuario,
        contra: this.clave
      }
    }
    //this.presentAlert();
    this.presentToast();
    this.router.navigate(['/teacher-home'], navigationExtras);

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }



}
