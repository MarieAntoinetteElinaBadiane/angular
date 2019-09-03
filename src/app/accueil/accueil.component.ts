import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

accueilUserData = {};

helper = new JwtHelperService();

constructor(private auth: AuthService,
            private router: Router) { }

ngOnInit() {
}

accueilUser() {
this.auth.accueilUser(this.accueilUserData)
.subscribe(
res => {
  localStorage.setItem('token', res.token);
  const decodedToken = this.helper.decodeToken(res.token);
  console.log(decodedToken);
  localStorage.setItem('username', decodedToken.username);
  localStorage.setItem('roles', decodedToken.roles[0]);
  localStorage.setItem('expiration', decodedToken.exp);
  console.log(localStorage);
  this.router.navigate(['/admin']);
},
err => console.log(err)
);

}
}
