import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavLink {
  route: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
})
export class NavComponent implements OnInit {
  @Input({ required: true }) index = '0';
  selected = 0;
  navLinks:NavLink[] = [];
  constructor() {
    this.navLinks.push({'name': 'Home', 'route': '/home', 'icon': 'account_balance'});
    this.navLinks.push({'name': 'Accounts', 'route': '/dashboard', 'icon': 'group'});
    this.navLinks.push({'name': 'Payment', 'route': '/payment', 'icon': 'sync_alt'});
    this.navLinks.push({'name': 'Loan', 'route': '/loan', 'icon': 'payments'});
    this.navLinks.push({'name': 'Card', 'route': '/card', 'icon': 'credit_card'});

    this.navLinks.push({'name': 'Government Scheme', 'route': '/government-scheme', 'icon': 'credit_card'});
    this.navLinks.push({'name': 'Tax center', 'route': '/tax-center', 'icon': 'credit_card'});
    this.navLinks.push({'name': 'Invest & Insure', 'route': '/invest-insure', 'icon': 'credit_card'});
    this.navLinks.push({'name': 'Bills and Utilities', 'route': '/bills-utilities', 'icon': 'credit_card'});

    this.navLinks.push({'name': 'FX 4 U', 'route': '/fx-4-u', 'icon': 'credit_card'});
    this.navLinks.push({'name': 'Other Services', 'route': '/other-services', 'icon': 'credit_card'});

  }

  ngOnInit() {}
}
