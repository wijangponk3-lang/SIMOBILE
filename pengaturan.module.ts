import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { PengaturanPageRoutingModule } from './pengaturan-routing.module';
import { PengaturanPage } from './pengaturan.page';

@NgModule({
  declarations: [PengaturanPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanPageRoutingModule
  ]
})
export class PengaturanPageModule {}