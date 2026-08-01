import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { UploadService } from '../../../../core/services/upload.service';

import { CreateProduct } from '../../../../core/models/product.model';
import { Category } from '../../../../core/models/category.model';

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
export class ProductRegister implements OnInit {

  categoryId: string = '';

  name: string = '';

  description: string = '';

  brand: string = '';

  price: number | null = null;

  stock: number | null = null;

  selectedImage: File | null = null;

  imagePreview: string | null = null;

  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private uploadService: UploadService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe({

      next: (categories) => {

        this.categories = categories;

      },

      error: (error) => {

        console.error('Error al cargar las categorías.', error);

      }

    });

  }

  registerProduct(): void {

    if (
      !this.categoryId ||
      !this.name ||
      this.price === null ||
      this.stock === null
    ) {
      return;
    }

    const product: CreateProduct = {

      category_id: this.categoryId,

      name: this.name,

      description: this.description,

      brand: this.brand,

      price: this.price,

      stock: this.stock

    };

    if (this.selectedImage) {

      this.uploadService.uploadImage(this.selectedImage).subscribe({

        next: (response) => {

          product.image_url = response.url;

          this.createProduct(product);

        },

        error: (error) => {

          console.error('Error al subir la imagen.', error);

          alert('No fue posible subir la imagen.');

        }

      });

    } else {

      this.createProduct(product);

    }

  }

  private createProduct(product: CreateProduct): void {

    this.productService.createProduct(product).subscribe({

      next: (createdProduct) => {

        console.log('Producto creado correctamente.', createdProduct);

        alert('¡Producto publicado correctamente!');

        this.router.navigate(['/seller-profile']);

      },

      error: (error) => {

        console.error('Error al crear el producto.', error);

        alert('No fue posible crear el producto.');

      }

    });

  }

  onImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedImage = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {

      this.imagePreview = reader.result as string;

    };

    reader.readAsDataURL(this.selectedImage);

  }

}