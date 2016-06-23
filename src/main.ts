import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouterConfig, provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';

import { AppComponent, environment } from './app/';
import { DashboardComponent } from './app/dashboard';
import { BookDetailsComponent } from './app/book-details';

const AppRoutes: RouterConfig = [
  // Startroute ohne führenden Slash
  { path: '',            component: DashboardComponent   },
  { path: 'book/:title', component: BookDetailsComponent }
];

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ provideRouter(AppRoutes) ]);

