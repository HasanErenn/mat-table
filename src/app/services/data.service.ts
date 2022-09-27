import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/classes/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    @Inject("baseUrl") private baseUrl:string,
    private http:HttpClient) { }

  GetUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl);
  }
}
