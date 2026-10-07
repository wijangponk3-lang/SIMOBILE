import { Component } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage {

  darkMode: boolean = false;

  constructor() {}

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle(
      'dark',
      this.darkMode
    );
  }

}