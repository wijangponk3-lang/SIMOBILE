import { Injectable } from '@angular/core';

export interface TransactionItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface Transaction {
  id: number;
  date: string;
  items: TransactionItem[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[] = [];

  constructor() {}

  // Mengambil semua transaksi
  getTransactions(): Transaction[] {
    return this.transactions;
  }

  // Menambahkan transaksi baru
  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  // Mencari transaksi berdasarkan ID
  getTransactionById(id: number): Transaction | undefined {
    return this.transactions.find(
      transaction => transaction.id === id
    );
  }

  // Menghitung jumlah semua transaksi
  getTotalTransactions(): number {
    return this.transactions.length;
  }

  // Mengambil transaksi hari ini
  getTodayTransactions(): Transaction[] {

    const today = new Date()
      .toISOString()
      .split('T')[0];

    return this.transactions.filter(
      transaction => transaction.date.startsWith(today)
    );
  }

  // Menghitung total transaksi hari ini
  getTodayTransactionTotal(): number {

    const todayTransactions =
      this.getTodayTransactions();

    return todayTransactions.reduce(
      (total, transaction) =>
        total + transaction.total,
      0
    );
  }

  // Mencari produk yang paling banyak terjual
  getBestSellingProduct(): string {

    const productSales: {
      [key: string]: number
    } = {};

    // Loop semua transaksi
    this.transactions.forEach(transaction => {

      // Loop semua produk dalam transaksi
      transaction.items.forEach(item => {

        if (productSales[item.productName]) {

          productSales[item.productName] += item.quantity;

        } else {

          productSales[item.productName] = item.quantity;

        }

      });

    });

    // Jika belum ada transaksi
    if (Object.keys(productSales).length === 0) {
      return 'Belum ada transaksi';
    }

    // Cari produk dengan jumlah penjualan terbanyak
    let bestProduct = '';
    let highestQuantity = 0;

    Object.keys(productSales).forEach(productName => {

      if (productSales[productName] > highestQuantity) {

        highestQuantity =
          productSales[productName];

        bestProduct = productName;

      }

    });

    return bestProduct;
  }

}