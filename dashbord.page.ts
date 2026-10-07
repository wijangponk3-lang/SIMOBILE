import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product';
import { TransactionService } from '../services/transaction';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
  standalone: false,
})
export class DashbordPage implements OnInit {

  // Jumlah semua produk
  totalProducts: number = 0;

  // Total uang transaksi hari ini
  todayTransactionTotal: number = 0;

  // Produk yang paling banyak terjual
  bestSellingProduct: string = 'Belum ada transaksi';

  constructor(
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.loadDashboard();
  }

  ionViewWillEnter() {
    this.loadDashboard();
  }

  // Mengambil data untuk Dashboard
  loadDashboard(): void {

    // Menghitung jumlah produk
    this.totalProducts =
      this.productService.getProducts().length;

    // Menghitung total transaksi hari ini
    this.todayTransactionTotal =
      this.transactionService.getTodayTransactionTotal();

    // Mencari produk terlaris
    this.bestSellingProduct =
      this.transactionService.getBestSellingProduct();
  }

}