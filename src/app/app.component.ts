import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet';

constructor(private authService: AuthService) {}

isAdmin() {
  return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }
  isCaissier() {
    return this.authService.isCaissier();
  }

  isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
