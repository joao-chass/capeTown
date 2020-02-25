import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private camera: Camera, private sanitizer: DomSanitizer) {}

  spending: Spending = new Spending();

  takePhoto() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     const base64Image = 'data:image/jpeg;base64,' + imageData;
    //  this.img = this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
    }, (err) => {
     // Handle error
    });
  }

  spendings() {
    console.log(this.spending);
  }

}


class Spending {
  value: number;
  typeSpending: string;
  description: string;
  typePyment: string;
}
