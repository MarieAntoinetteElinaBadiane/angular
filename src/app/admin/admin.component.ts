import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserpartenaireService } from '../services/userpartenaire.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  imageUrl = 'assets/image/10470160_809915135759845_2788256635924871429_o.jpg';
  ajoutUserPartenaireData = {imageFile : File = null};
    constructor( private userpartenaireService: UserpartenaireService,
                 private router: Router) { }

    ngOnInit() {
    }
    handleFileInput(file: FileList) {
      this.ajoutUserPartenaireData.imageFile = file.item(0);
      const reader = new FileReader();
      reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.ajoutUserPartenaireData.imageFile);
      }
      ajoutUserPartenaire() {
      this.userpartenaireService.ajoutUserPartenaire(this.ajoutUserPartenaireData)
      .subscribe(
           res => {
      console.log(res);
      this.router.navigate(['/partenaire']);
      this.router.navigate(['/user']);
        },
        err => console.log(err)
      );

  }
}
