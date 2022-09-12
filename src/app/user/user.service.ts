import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './User.interface';

const routes = {
  GET_USERS:'http://localhost:9000/users'
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<IUser[]>(routes.GET_USERS)
  }
}
