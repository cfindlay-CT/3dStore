import { Routes } from '@angular/router';
import { HomeComponent, ProductsComponent } from './components/';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent }
];
