import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginResponse} from '../models/auth.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private api = 'http://127.0.0.1:8000/api/auth';
    private readonly TOKEN_KEY = 'access_token';

    constructor(
    private http: HttpClient
  ) {}

  login(
    email: string,
    password: string
  ): Observable<LoginResponse> {

    const body = new HttpParams()
      .set('username', email)
      .set('password', password);

    return this.http.post<LoginResponse>(
      `${this.api}/login`,
      body.toString(),
      {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      }
    );

  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('user_id');
  }

  getUserId(): string | null {

    const token = this.getToken();

    if (!token) {
      return null;
    }

    try {

      const payload = JSON.parse(
        atob(token.split('.')[1])
      );

      return payload.sub;

    } catch {

      return null;

    }

  }

  getUserRole(): string | null {

    const token = this.getToken();

    if (!token) {
      return null;
    }

    try {

      const payload = JSON.parse(
        atob(token.split('.')[1])
      );

      return payload.role;

    } catch {

      return null;

    }

  }

}
