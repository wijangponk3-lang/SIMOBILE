import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  protected readonly appPages = [
    {
      title: 'Dashboard',
      url: '/tabs/dashbord',
      icon: 'home'
    },
    {
      title: 'Produk',
      url: '/tabs/produk',
      icon: 'cube'
    },
    {
      title: 'Transaksi',
      url: '/tabs/transaksi',
      icon: 'cart'
    },
    {
      title: 'Profil',
      url: '/tabs/profil',
      icon: 'person'
    }
  ];

  protected readonly menuPages = [
    {
      title: 'Pengaturan',
      url: '/pengaturan',
      icon: 'settings'
    },
    {
      title: 'Tentang Aplikasi',
      url: '/tentang',
      icon: 'information-circle'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor() {}

}