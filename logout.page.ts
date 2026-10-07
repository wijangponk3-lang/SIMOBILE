import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  standalone: false,
})
export class LogoutPage {

  constructor(private router: Router) {}

  confirmLogout(): void {
    const yakin = confirm(
      'Apakah Anda yakin ingin logout?'
    );

    if (yakin) {
      this.router.navigate(['/tabs/dashbord']);
    }
  }

}