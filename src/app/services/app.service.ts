import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

ajoutUser(User) {
const endpoint = 'http://localhost:8000/admin';
const formData: FormData = new FormData();
formData.append('nom', User.nom);
formData.append('prenom', User.prenom);
formData.append('username', User.username);
formData.append('password', User.password);
formData.append('imageFile', User.imageFile);
formData.append('statut', User.statut);
return this.httpClient.post(endpoint, formData);
}


}
