import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  constructor() {}

  ngOnInit() {}
}
