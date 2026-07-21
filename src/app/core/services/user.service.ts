import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  User,
  CreateUser,
  UpdateUser
} from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private readonly api = "http://127.0.0.1:8000/api/users";

  constructor(
    private http: HttpClient
  ) {}

  createUser(
    user: CreateUser
  ): Observable<User> {

    return this.http.post<User>(
      this.api,
      user
    );

  }

  getUser(
    id: string
  ): Observable<User> {

    return this.http.get<User>(
      `${this.api}/${id}`
    );

  }

  updateUser(
    id: string,
    user: UpdateUser
  ): Observable<User> {

    return this.http.put<User>(
      `${this.api}/${id}`,
      user
    );

  }

}