import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Transaction,
  TransactionService
} from '../services/transaction';

@Component({
  selector: 'app-transaksi-detail',
  templateUrl: './transaksi-detail.page.html',
  styleUrls: ['./transaksi-detail.page.scss'],
  standalone: false,
})
export class TransaksiDetailPage implements OnInit {

  transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {

    // Mengambil ID transaksi dari URL
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    // Mencari transaksi berdasarkan ID
    this.transaction =
      this.transactionService.getTransactionById(id);
  }

}