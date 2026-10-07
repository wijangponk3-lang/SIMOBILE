import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductService } from '../services/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.page.html',
  styleUrls: ['./produk-detail.page.scss'],
  standalone: false,
})
export class ProdukDetailPage implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = this.productService.getProductById(id);

  }

  addToCart(): void {

    if (this.product && this.product.stock > 0) {

      this.cartService.addToCart(this.product);

      alert(
        this.product.name + ' berhasil ditambahkan ke keranjang'
      );

    }

  }

}