import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://127.0.0.1:8000/api/uploads';

  uploadImage(file: File): Observable<{ url: string }> {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post<{ url: string }>(
      `${this.apiUrl}/image`,
      formData
    );

  }

}