import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../../../../core/services/seller.service';

import {
  Seller,
  UpdateSeller
} from '../../../../core/models/seller.model';

@Component({
  selector: 'app-seller-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './seller-profile.html',
  styleUrl: './seller-profile.scss'
})
export class SellerProfile implements OnInit {

  documentNumber = '';
  storeName = '';
  phone = '';
  rating = 0;
  seller!: Seller;

  constructor(
    private sellerService: SellerService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadSeller();

  }

  loadSeller(): void {

    this.sellerService.getMySeller().subscribe({

      next: (seller) => {

        this.seller = seller;

        this.documentNumber = seller.document_number;
        this.storeName = seller.store_name;
        this.phone = seller.phone;
        this.rating = seller.rating;

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible cargar el perfil del vendedor.');

      }

    });

  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  updateSeller(): void {

    const seller: UpdateSeller = {

      store_name: this.storeName,
      phone: this.phone

    };

    this.sellerService.updateMySeller(seller).subscribe({

      next: (response) => {

        this.seller = response;

        alert('Perfil actualizado correctamente.');

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible actualizar el perfil.');

      }

    });

  }

  goToCreateProduct(): void {

    // Más adelante redirigiremos al formulario de creación de productos
    console.log('Crear producto');

  }

}