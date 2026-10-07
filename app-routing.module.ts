import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // =========================
  // HALAMAN UTAMA
  // =========================
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },

  // =========================
  // TABS
  // Dashboard
  // Produk
  // Transaksi
  // Profil
  // =========================
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(
        m => m.TabsPageModule
      )
  },

  // =========================
  // PENGATURAN
  // =========================
  {
    path: 'pengaturan',
    loadChildren: () =>
      import('./pengaturan/pengaturan.module').then(
        m => m.PengaturanPageModule
      )
  },

  // =========================
  // TENTANG APLIKASI
  // =========================
  {
    path: 'tentang',
    loadChildren: () =>
      import('./tentang/tentang.module').then(
        m => m.TentangPageModule
      )
  },

  // =========================
  // LOGOUT
  // =========================
  {
    path: 'logout',
    loadChildren: () =>
      import('./logout/logout.module').then(
        m => m.LogoutPageModule
      )
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      bindToComponentInputs: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}