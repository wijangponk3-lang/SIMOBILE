import { Injectable } from '@angular/core';
import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  constructor() {}

  // Menambahkan produk ke keranjang
  addToCart(product: Product): void {

    const existingItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        product: product,
        quantity: 1
      });
    }
  }

  // Mengurangi jumlah produk
  decreaseQuantity(productId: number): void {

    const item = this.cartItems.find(
      item => item.product.id === productId
    );

    if (item) {

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
      }

    }
  }

  // Menambah jumlah produk
  increaseQuantity(productId: number): void {

    const item = this.cartItems.find(
      item => item.product.id === productId
    );

    if (item) {
      item.quantity++;
    }
  }

  // Menghapus produk dari keranjang
  removeFromCart(productId: number): void {

    this.cartItems = this.cartItems.filter(
      item => item.product.id !== productId
    );
  }

  // Mengambil semua isi keranjang
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Menghitung subtotal satu item
  getSubtotal(item: CartItem): number {
    return item.product.sellPrice * item.quantity;
  }

  // Menghitung total semua barang
  getTotal(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + (item.product.sellPrice * item.quantity),
      0
    );
  }

  // Mengosongkan keranjang
  clearCart(): void {
    this.cartItems = [];
  }

  // Mengecek apakah keranjang kosong
  isEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}