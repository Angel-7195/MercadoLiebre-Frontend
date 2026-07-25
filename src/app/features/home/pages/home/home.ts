import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';
import { SellerService } from '../../../../core/services/seller.service';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {

    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);
    private readonly sellerService = inject(SellerService);

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

                    alert('No fue posible verificar el perfil de vendedor.');

                }

            }

        });

    }

    searchProducts(): void {
        // Se implementará cuando exista el buscador conectado a la API.
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    logout(): void {

        this.authService.logout();

        this.router.navigateByUrl('/');

    }

}