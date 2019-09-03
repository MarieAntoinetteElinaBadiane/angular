import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles: any;

  constructor(private http: HttpClient) { }


private accueilUlr = 'http://localhost:8000/api/login_check';
private signinUrl = 'http://localhost:8000/api/login_check';

accueilUser(user) {
 return this.http.post<any>(this.accueilUlr, user);
}

signinUser(user) {
  return this.http.post<any>(this.signinUrl, user);
 }

loggedIn() {
return !!localStorage.getItem('token');
}

getToken() {
  return localStorage.getItem('token');
}
isAdmin() {
  return this.roles.indexOf('ROLE_ADMIN') >= 0;
}
isUser() {
return this.roles.indexOf('ROLE_USER') >= 0;
}
isCaissier() {
  return this.roles.indexOf('ROLE_CAISSIER') >= 0;
}
isSuperAdmin() {
    return this.roles.indexOf('ROLE_SUPERADMIN') >= 0;
}
isAuthenticated() {
  return this.roles && (this.isAdmin() || this.isUser() || this.isCaissier() || this.isSuperAdmin() );
}
}
