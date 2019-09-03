import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {

  imageUrl = 'assets/image/10470160_809915135759845_2788256635924871429_o.jpg';
   ajoutUserData = {imageFile : File = null};
  constructor( private appService: AppService,
               private router: Router) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.ajoutUserData.imageFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.ajoutUserData.imageFile);
    }
    ajoutUser() {
    this.appService.ajoutUser(this.ajoutUserData)
    .subscribe(
         res => {
    console.log(res);
    this.router.navigate(['/user']);
      },
      err => console.log(err)
    );

}
}
