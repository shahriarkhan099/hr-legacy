import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  logout() {
    localStorage.removeItem('accessToken');
    window.location.href = 'https://getbento.vercel.app/logout';
  }
}
