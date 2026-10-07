import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { ProdukPageRoutingModule } from './produk-routing.module';
import { ProdukPage } from './produk.page';

@NgModule({
  declarations: [ProdukPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukPageRoutingModule
  ]
})
export class ProdukPageModule {}