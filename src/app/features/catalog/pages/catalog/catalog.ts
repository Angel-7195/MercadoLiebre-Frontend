import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';
import { SellerService } from '../../../../core/services/seller.service';
import { ProductService } from '../../../../core/services/product.service';

import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly sellerService = inject(SellerService);
  private readonly productService = inject(ProductService);

  products: Product[] = [];

  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {

    this.loading = true;
    this.errorMessage = '';

    this.productService.getProducts().subscribe({

      next: (products) => {

        this.products = products;
        this.loading = false;

      },

      error: (error) => {

        console.error('Error cargando productos:', error);

        this.errorMessage =
          'No se pudieron cargar los productos.';

        this.loading = false;

      }

    });

  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  goToSell(): void {

    if (!this.isLoggedIn()) {

      this.router.navigate(['/login']);
      return;

    }

    this.sellerService.getMySeller().subscribe({

      next: () => {

        // El usuario ya tiene perfil de vendedor
        this.router.navigate(['/seller-profile']);

      },

      error: (error) => {

        if (error.status === 404) {

          // El usuario aún no es vendedor
          this.router.navigate(['/seller-register']);

        } else {

          console.error(error);

          alert(
            'No fue posible verificar el perfil de vendedor.'
          );

        }

      }

    });

  }

  searchProducts(): void {
    // Se implementará cuando exista
    // el buscador conectado a la API.
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {

    this.authService.logout();

    this.router.navigateByUrl('/');

  }

}