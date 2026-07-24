import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';


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

    goToSell() {

    if (!this.isLoggedIn()) {

        this.router.navigate(['/login']);
        return;

    }

    this.router.navigate(['/seller-register']);

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