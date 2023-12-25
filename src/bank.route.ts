import { Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';

let bank_routes: Routes;
export default bank_routes = [
  { path: 'home', component: BankComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
