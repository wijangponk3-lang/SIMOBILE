import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Product,
  ProductService
} from '../services/product';

@Component({
  selector: 'app-produk-form',
  templateUrl: './produk-form.page.html',
  styleUrls: ['./produk-form.page.scss'],
  standalone: false,
})
export class ProdukFormPage implements OnInit {

  productForm!: FormGroup;

  isEdit: boolean = false;

  productId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    // Membuat Reactive Form
    this.productForm = this.formBuilder.group({

      name: [
        '',
        Validators.required
      ],

      category: [
        '',
        Validators.required
      ],

      buyPrice: [
        0,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      sellPrice: [
        0,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      stock: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      image: [
        ''
      ]

    });


    // Mengecek apakah halaman sedang edit produk
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.isEdit = true;

      this.productId = Number(id);

      const product =
        this.productService.getProductById(this.productId);

      if (product) {

        this.productForm.patchValue({

          name: product.name,
          category: product.category,
          buyPrice: product.buyPrice,
          sellPrice: product.sellPrice,
          stock: product.stock,
          image: product.image

        });

      }

    }

  }


  // Menyimpan produk
  saveProduct(): void {

    // Jika form masih tidak valid
    if (this.productForm.invalid) {

      this.productForm.markAllAsTouched();

      return;

    }


    // Mengambil data dari form
    const formValue = this.productForm.value;


    if (this.isEdit && this.productId !== null) {

      // Update produk lama
      const updatedProduct: Product = {

        id: this.productId,

        name: formValue.name,

        category: formValue.category,

        buyPrice: Number(formValue.buyPrice),

        sellPrice: Number(formValue.sellPrice),

        stock: Number(formValue.stock),

        image: formValue.image || ''

      };

      this.productService.updateProduct(updatedProduct);

    } else {

      // Membuat ID baru
      const products =
        this.productService.getProducts();

      const newId =
        products.length > 0
          ? Math.max(...products.map(p => p.id)) + 1
          : 1;


      // Membuat produk baru
      const newProduct: Product = {

        id: newId,

        name: formValue.name,

        category: formValue.category,

        buyPrice: Number(formValue.buyPrice),

        sellPrice: Number(formValue.sellPrice),

        stock: Number(formValue.stock),

        image: formValue.image || ''

      };

      this.productService.addProduct(newProduct);

    }


    // Kembali ke halaman produk
    this.router.navigate(['/tabs/produk']);

  }


  // Mengecek apakah field invalid
  isInvalid(fieldName: string): boolean {

    const field =
      this.productForm.get(fieldName);

    return !!(
      field &&
      field.invalid &&
      field.touched
    );

  }

}