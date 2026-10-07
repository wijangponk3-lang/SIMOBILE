import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../services/cart';
import { TransactionService } from '../services/transaction';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  cartItems: CartItem[] = [];
  total: number = 0;
  transactions: any[] = [];

  constructor(
    private cartService: CartService,
    private transactionService: TransactionService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadCart();
    this.loadTransactions();
  }

  ionViewWillEnter() {
    this.loadCart();
    this.loadTransactions();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  loadTransactions(): void {
    this.transactions = this.transactionService.getTransactions();
  }

  increaseQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
    this.loadCart();
  }

  decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
    this.loadCart();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  checkout(): void {

    // Cek apakah keranjang kosong
    if (this.cartService.isEmpty()) {
      alert('Keranjang masih kosong.');
      return;
    }

    // Membuat data item transaksi
    const items = this.cartItems.map(item => ({
      productId: item.product.id,
      productName: item.product.name,
      price: item.product.sellPrice,
      quantity: item.quantity,
      subtotal: item.product.sellPrice * item.quantity
    }));

    // Membuat transaksi baru
    const transaction = {
      id: this.transactionService.getTotalTransactions() + 1,
      date: new Date().toISOString(),
      items: items,
      total: this.total
    };

    // Simpan transaksi
    this.transactionService.addTransaction(transaction);

    // Kurangi stok setiap produk
    this.cartItems.forEach(item => {
      this.productService.reduceStock(
        item.product.id,
        item.quantity
      );
    });

    // Kosongkan keranjang
    this.cartService.clearCart();

    // Refresh data
    this.loadCart();
    this.loadTransactions();

    alert('Transaksi berhasil disimpan!');
  }
} 