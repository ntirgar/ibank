import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DonutComponent } from '../DonutComponent';

interface Card {
  id: string;
  title: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
    DonutComponent
  ],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  cards: Card[] = [];
  constructor() {
    this.cards = [
      { id: '0', title: 'Card 1', cols: 2, rows: 1 },
      { id: '1', title: 'Card 2', cols: 1, rows: 1 },
      { id: '2', title: 'Card 3', cols: 1, rows: 2 },
      { id: '3', title: 'Card 4', cols: 1, rows: 1 },
    ];
  }

  /** Based on the screen size, switch from standard to one column per row */
  /* cards: Observable<Card[]> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  ); */
}
