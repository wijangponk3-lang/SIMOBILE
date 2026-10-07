import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  buyPrice: number;
  sellPrice: number;
  stock: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [

    {
      id: 1,
      name: 'Indomie Goreng',
      category: 'Makanan',
      buyPrice: 2500,
      sellPrice: 3500,
      stock: 20,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500'
    },

    {
      id: 2,
      name: 'Aqua 600ml',
      category: 'Minuman',
      buyPrice: 2500,
      sellPrice: 4000,
      stock: 30,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500'
    },

    {
      id: 3,
      name: 'Teh Botol',
      category: 'Minuman',
      buyPrice: 3000,
      sellPrice: 5000,
      stock: 15,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500'
    },

    {
      id: 4,
      name: 'Roti Coklat',
      category: 'Makanan',
      buyPrice: 5000,
      sellPrice: 7500,
      stock: 12,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
    },

    {
      id: 5,
      name: 'Keripik Kentang',
      category: 'Snack',
      buyPrice: 7000,
      sellPrice: 10000,
      stock: 10,
      image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=500'
    },

    {
      id: 6,
      name: 'Kopi Sachet',
      category: 'Minuman',
      buyPrice: 1500,
      sellPrice: 2500,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500'
    },

    {
      id: 7,
      name: 'Biskuit',
      category: 'Snack',
      buyPrice: 6000,
      sellPrice: 8500,
      stock: 18,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500'
    },

    {
      id: 8,
      name: 'Susu Kotak',
      category: 'Minuman',
      buyPrice: 5000,
      sellPrice: 7000,
      stock: 14,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500'
    },

    {
      id: 9,
      name: 'Permen',
      category: 'Snack',
      buyPrice: 1000,
      sellPrice: 1500,
      stock: 40,
      image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=500'
    },

    {
      id: 10,
      name: 'Mie Kuah',
      category: 'Makanan',
      buyPrice: 2500,
      sellPrice: 3500,
      stock: 22,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500'
    }

  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(
      product => product.id === id
    );
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {

    const index = this.products.findIndex(
      product => product.id === updatedProduct.id
    );

    if (index !== -1) {
      this.products[index] = updatedProduct;
    }

  }

  reduceStock(productId: number, quantity: number): void {

    const product = this.products.find(
      product => product.id === productId
    );

    if (product) {

      product.stock -= quantity;

      if (product.stock < 0) {
        product.stock = 0;
      }

    }

  }

  deleteProduct(id: number): void {

    this.products = this.products.filter(
      product => product.id !== id
    );

  }

}