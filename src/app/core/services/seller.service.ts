import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  Seller,
  CreateSeller,
  UpdateSeller
} from "../models/seller.model";

@Injectable({
  providedIn: "root"
})
export class SellerService {

  private readonly api = "http://127.0.0.1:8000/api/sellers";

  constructor(
    private http: HttpClient
  ) {}

  createSeller(
    seller: CreateSeller
  ): Observable<Seller> {

    return this.http.post<Seller>(
      this.api,
      seller
    );

  }

  getSeller(
    id: string
  ): Observable<Seller> {

    return this.http.get<Seller>(
      `${this.api}/${id}`
    );

  }

  updateSeller(
    id: string,
    seller: UpdateSeller
  ): Observable<Seller> {

    return this.http.put<Seller>(
      `${this.api}/${id}`,
      seller
    );

  }

}