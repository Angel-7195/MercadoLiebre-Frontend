import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-register.html',
  styleUrl: './product-register.scss'
})
export class ProductRegister {

  categoryId: string = '';

  name: string = '';

  description: string = '';

  brand: string = '';

  price: number | null = null;

  registerProduct(): void {

    console.log({
      category_id: this.categoryId,
      name: this.name,
      description: this.description,
      brand: this.brand,
      price: this.price
    });

    // Aquí después llamaremos al ProductService.
  }

}