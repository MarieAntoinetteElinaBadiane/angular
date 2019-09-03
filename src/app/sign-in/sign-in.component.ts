import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignINComponent implements OnInit {

  signinUserData = {};

  helper = new JwtHelperService();

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

signinUser() {

this.auth.signinUser(this.signinUserData)
.subscribe(
  res => {
    localStorage.setItem('token', res.token);
    const decodedToken = this.helper.decodeToken(res.token);
    console.log(decodedToken);
     // console.log(res);
    localStorage.setItem('username', decodedToken.username);
    localStorage.setItem('roles', decodedToken.roles[0]);
    localStorage.setItem('expiration', decodedToken.exp);
    console.log(localStorage);
    // this.router.navigate(['/transaction']);
},
  err => console.log(err)
);

}


}
