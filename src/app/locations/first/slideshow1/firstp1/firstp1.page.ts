import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-firstp1',
  templateUrl: './firstp1.page.html',
  styleUrls: ['./firstp1.page.scss'],
})
export class Firstp1Page implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Sorry, that\'s incorrect.',
    message: 'The correct answer was: New York.',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Correct!',
    message: 'You are a Montgomery Master!!!',
    buttons: ['Awesome! Let\'s keep exploring!']
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

}
