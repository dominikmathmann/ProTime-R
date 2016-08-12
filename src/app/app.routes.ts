import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './home/home.component'


export const routes: RouterConfig = [
    { component: HomeComponent, path:""},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];