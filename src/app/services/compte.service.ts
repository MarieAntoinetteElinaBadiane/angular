import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient: HttpClient) {}

  compte(User) {
    const endpoint = 'http://localhost:8000/api/compte';
    const formData: FormData = new FormData();
    formData.append('solde', User.solde);
    return this.httpClient.post(endpoint, formData);
  }
}
