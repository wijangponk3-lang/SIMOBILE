import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,

    children: [

      // =========================
      // DASHBOARD
      // =========================

      {
        path: 'dashbord',
        loadChildren: () =>
          import('../dashbord/dashbord.module').then(
            m => m.DashbordPageModule
          )
      },


      // =========================
      // PRODUK
      // =========================

      {
        path: 'produk',
        loadChildren: () =>
          import('../produk/produk.module').then(
            m => m.ProdukPageModule
          )
      },


      // =========================
      // FORM TAMBAH / EDIT PRODUK
      // =========================

      {
        path: 'produk-form',
        loadChildren: () =>
          import('../produk-form/produk-form.module').then(
            m => m.ProdukFormPageModule
          )
      },

      {
        path: 'produk-form/:id',
        loadChildren: () =>
          import('../produk-form/produk-form.module').then(
            m => m.ProdukFormPageModule
          )
      },


      // =========================
      // DETAIL PRODUK
      // =========================

      {
        path: 'produk-detail/:id',
        loadChildren: () =>
          import('../produk-detail/produk-detail.module').then(
            m => m.ProdukDetailPageModule
          )
      },


      // =========================
      // TRANSAKSI
      // =========================

      {
        path: 'transaksi',
        loadChildren: () =>
          import('../transaksi/transaksi.module').then(
            m => m.TransaksiPageModule
          )
      },


      // =========================
      // DETAIL TRANSAKSI
      // =========================

      {
        path: 'transaksi-detail/:id',
        loadChildren: () =>
          import('../transaksi-detail/transaksi-detail.module').then(
            m => m.TransaksiDetailPageModule
          )
      },


      // =========================
      // PROFIL
      // =========================

      {
        path: 'profil',
        loadChildren: () =>
          import('../profil/profil.module').then(
            m => m.ProfilPageModule
          )
      },


      // =========================
      // DEFAULT
      // =========================

      {
        path: '',
        redirectTo: 'dashbord',
        pathMatch: 'full'
      }

    ]
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class TabsPageRoutingModule {}