import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SellerService } from '../../../../core/services/seller.service';
import { ProductService } from '../../../../core/services/product.service';

import {
  Seller,
  UpdateSeller
} from '../../../../core/models/seller.model';

import {
  Product
} from '../../../../core/models/product.model';

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

  products: Product[] = [];

  constructor(
    private sellerService: SellerService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadSeller();

    this.loadProducts();

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

  loadProducts(): void {

    this.productService.getMyProducts().subscribe({

      next: (products) => {

        this.products = products;

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible cargar los productos.');

      }

    });

  }

  deleteProduct(productId: string): void {

    const confirmed = confirm(
      '¿Estás seguro de eliminar este producto?'
    );

    if (!confirmed) {
      return;
    }

    this.productService.deleteProduct(productId).subscribe({

      next: () => {

        alert('Producto eliminado correctamente.');

        this.loadProducts();

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible eliminar el producto.');

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

    this.router.navigate(['/product-register']);

  }

  goToEditProduct(productId: string): void {

    this.router.navigate([
      '/product-edit',
      productId
    ]);

  }

}