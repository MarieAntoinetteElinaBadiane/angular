import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [UploadImageComponent]
})
export class UploadImageComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
