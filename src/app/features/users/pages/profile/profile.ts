import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {

  showPassword = false;

  fullName = '';
  email = '';
  password = '';

  userId = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {

    const userId = this.authService.getUserId();

    if (!userId) {
      return;
    }

    this.userService.getUser(userId).subscribe({

      next: (user) => {

        this.userId = user.id;

        this.fullName = user.full_name;
        this.email = user.email;
        this.password = '';

      },

      error: () => {

        alert('No fue posible cargar la información del usuario.');

      }

    });

  }

  saveChanges(): void {

    const payload: any = {

      full_name: this.fullName,
      email: this.email,
      role: 'CLIENT'

    };

    // Solo enviar contraseña si el usuario escribió una nueva.
    if (this.password.trim() !== '') {
      payload.password = this.password;
    }

    this.userService.updateUser(
      this.userId,
      payload
    ).subscribe({

      next: () => {

        alert('Datos actualizados correctamente.');

        this.password = '';

        this.router.navigate(['/']);

      },

      error: () => {

        alert('No fue posible actualizar los datos.');

      }

    });

  }

  resetChanges(): void {
    this.loadUser();
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

}