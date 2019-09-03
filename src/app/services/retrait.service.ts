import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {

  constructor(private httpClient: HttpClient) {}
  retrait(User) {
    const endpoint = 'http://localhost:8000/api/retrait/5';
    const formData: FormData = new FormData();
    formData.append('montantenvoi', User.montantenvoi);
    formData.append('nomenvoi', User.nomenvoi);
    formData.append('prenomenvoi', User.prenomenvoi);
    formData.append('telephoneenvoi', User.telephoneenvoi);
    formData.append('CNIenvoi', User.CNIenvoi);
    formData.append('nomretrai', User.nomretrai);
    formData.append('prenomretrai', User.prenomretrai);
    formData.append('telephoneretrai', User.telephoneretrai);
    formData.append('CNIretrai', User.CNIretrai);
    formData.append('statut', User.statut);
    return this.httpClient.post(endpoint, formData);
  }
}
