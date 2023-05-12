import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private alertController: AlertController) {}

  SumBMRMale: any;
  SumBMRFemale: any;

  Height: any;
  Weight: any;
  Age: any;
  Gender: string = '';
  SumBMR: any = '';

  checkGender() {
    if (this.Gender === 'Male') {
      this.Showconsole();
    } else if (this.Gender === 'Female') {
      this.Showconsole2();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'BMR',
      message: `BMR: ${this.SumBMR}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  Showconsole() {
    this.SumBMRMale = ((10 * this.Weight) + (6.25 * this.Height) - (5 * this.Age) + 5).toFixed(2);
    this.SumBMR = this.SumBMRMale;
    this.presentAlert();
  }

  Showconsole2() {
    this.SumBMRFemale = ((10 * this.Weight) + (6.25 * this.Height) - (5 * this.Age) - 106).toFixed(2);
    this.SumBMR = this.SumBMRFemale;
    this.presentAlert();
  }
}
