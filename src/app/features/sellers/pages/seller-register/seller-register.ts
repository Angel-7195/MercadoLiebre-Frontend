import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SellerService } from '../../../../core/services/seller.service';
import { CreateSeller } from '../../../../core/models/seller.model';

@Component({
  selector: 'app-seller-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './seller-register.html',
  styleUrl: './seller-register.scss'
})
export class SellerRegister {

  documentNumber = '';
  storeName = '';
  phone = '';

  constructor(
    private sellerService: SellerService,
    private router: Router
  ) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  registerSeller() {

    const seller: CreateSeller = {
      document_number: this.documentNumber,
      store_name: this.storeName,
      phone: this.phone
    };

    this.sellerService.createSeller(seller).subscribe({

      next: (response) => {

        console.log('Seller creado:', response);

        alert('Perfil de vendedor creado correctamente.');

        // Temporalmente volvemos al inicio.
        // Más adelante cambiaremos esto al perfil del vendedor.
        this.router.navigate(['/']);

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible crear el perfil de vendedor.');

      }

    });

  }

}