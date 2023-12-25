import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bank',
  standalone: true,
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NavComponent,
    RouterOutlet,
  ],
})
export class BankComponent implements OnInit {
  showFiller = true;
  numbers = [1, 2];
  constructor() {}

  ngOnInit() {}
}
