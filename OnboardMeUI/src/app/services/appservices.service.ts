import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:7180/api/OnboardMe";
  RegisterNewUser(obj: user) {
    return this.http.post(this.url + "/Register", obj);

  }
}
