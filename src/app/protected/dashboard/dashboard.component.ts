import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  get usuario() {
    return this.authServise.usuario;
  }
  constructor(private router: Router, private authServise: AuthService) {}
  logout() {
    this.router.navigateByUrl('/auth');
    this.authServise.logout();
  }

  ngOnInit(): void {}
}
