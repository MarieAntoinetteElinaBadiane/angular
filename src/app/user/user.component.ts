import { Component, OnInit } from '@angular/core';
import { UsercompteService } from '../services/usercompte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  imageUrl = 'assets/image/10470160_809915135759845_2788256635924871429_o.jpg';
  ajoutCompteData = {imageFile : File = null};
    constructor( private usercompteService: UsercompteService,
                 private router: Router) { }

    ngOnInit() {
    }
    handleFileInput(file: FileList) {
      this.ajoutCompteData.imageFile = file.item(0);
      const reader = new FileReader();
      reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.ajoutCompteData.imageFile);
      }
      ajoutCompte() {
      this.usercompteService.ajoutCompte(this.ajoutCompteData)
      .subscribe(
           res => {
      console.log(res);
        },
        err => console.log(err)
      );

  }

}

