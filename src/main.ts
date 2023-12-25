import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';
import { BankComponent } from './bank/bank.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import BANK_ROUTES from './bank.route';
import { MatNativeDateModule } from '@angular/material/core';

bootstrapApplication(BankComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    provideRouter(BANK_ROUTES),
  ],
}).catch((err) => console.error(err));
