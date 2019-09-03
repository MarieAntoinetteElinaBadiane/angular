import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

constructor(private httpClient: HttpClient) {}

depot(User) {
  const endpoint = 'http://localhost:8000/api/depot';
  const formData: FormData = new FormData();

  formData.append('numerocompte', User.numerocompte);
  formData.append('montant', User.montant);
  return this.httpClient.post(endpoint, formData);
}
}
