import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  searchProduct() {

    const search = this.searchText.toLowerCase();

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );

  }

}