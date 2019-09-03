import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserpartenaireService {

  constructor(private httpClient: HttpClient) {}
  ajoutUserPartenaire(User) {
    const endpoint = 'http://localhost:8000/adduser';
    const formData: FormData = new FormData();
    formData.append('nom', User.nom);
    formData.append('prenom', User.prenom);
    formData.append('username', User.username);
    formData.append('password', User.password);
    formData.append('imageFile', User.imageFile);
    formData.append('statut', User.statut);
    formData.append('ninea', User.ninea);
    formData.append('adresse', User.adresse);
    formData.append('raison_sociale', User.raison_sociale);

    return this.httpClient.post(endpoint, formData);
    }
}
