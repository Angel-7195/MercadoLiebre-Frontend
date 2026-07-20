import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})

export class Register {
  showPassword = false;

  fullName = '';
  email = '';
  password = '';

   constructor(
    private userService: UserService,
    private router: Router
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  goToLogin(): void {
  this.router.navigate(['/login']);
}

  register() {

    if (this.fullName.trim().length === 0) {
      alert('Debes ingresar tu nombre.');
      return;
    }

    if (this.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    this.userService
      .createUser({
        full_name: this.fullName,
        email: this.email,
        password: this.password,
        role: 'CLIENT'
      })
      .subscribe({
        next: () => {
          alert('Cuenta creada correctamente.');
          this.router.navigate(['/login']);
        },

        error: (error) => {

          if (error.status === 409) {
            alert('Ya existe una cuenta con ese correo.');
          } else {
            alert('No fue posible crear la cuenta.');
          }

        }

      });

  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
