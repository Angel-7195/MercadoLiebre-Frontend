import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {

    private readonly router = inject(Router);

    goHome(): void {
        this.router.navigate(['/']);
    }

    goToLogin(): void {
        this.router.navigate(['/login']);
    }

    goToRegister(): void {
        this.router.navigate(['/register']);
    }

    searchProducts(): void {
        // Se implementará cuando exista el buscador conectado a la API.
    }

}