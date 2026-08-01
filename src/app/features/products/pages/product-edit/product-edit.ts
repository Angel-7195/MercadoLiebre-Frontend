import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { UploadService } from '../../../../core/services/upload.service';

import { Category } from '../../../../core/models/category.model';
import {
  Product,
  UpdateProduct
} from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss'
})
export class ProductEdit implements OnInit {

  productId = '';

  categoryId = '';

  name = '';

  description = '';

  brand = '';

  price: number | null = null;

  stock: number | null = null;

  imageUrl = '';

  selectedImage: File | null = null;

  imagePreview: string | null = null;

  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {

    this.loadCategories();

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.productId = id;

      this.loadProduct(id);

    }

  }

  loadCategories(): void {

    this.categoryService.getCategories().subscribe({

      next: (categories) => {

        this.categories = categories;

      },

      error: (error) => {

        console.error(error);

      }

    });

  }

  loadProduct(productId: string): void {

    this.productService.getProduct(productId).subscribe({

      next: (product: Product) => {

        this.categoryId = product.category_id;

        this.name = product.name;

        this.description = product.description ?? '';

        this.brand = product.brand ?? '';

        this.price = Number(product.price);

        this.stock = product.stock;

        this.imageUrl = product.image_url ?? '';

        this.imagePreview = this.imageUrl;

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible cargar el producto.');

      }

    });

  }

  updateProduct(): void {

    if (
      !this.categoryId ||
      !this.name ||
      this.price === null ||
      this.stock === null
    ) {
      return;
    }

    const product: UpdateProduct = {

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

          this.saveProduct(product);

        },

        error: (error) => {

          console.error(error);

          alert('No fue posible subir la nueva imagen.');

        }

      });

    } else {

      this.saveProduct(product);

    }

  }

  private saveProduct(product: UpdateProduct): void {

    this.productService.updateProduct(
      this.productId,
      product
    ).subscribe({

      next: () => {

        alert('Producto actualizado correctamente.');

        this.router.navigate(['/seller-profile']);

      },

      error: (error) => {

        console.error(error);

        alert('No fue posible actualizar el producto.');

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