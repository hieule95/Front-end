import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProductListComponent } from './components/dashboard/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/dashboard/product/product-detail/product-detail.component';
import { ContactComponent } from './components/dashboard/contact/contact.component';
import { LoginComponent } from './components/dashboard/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'product',
        component: ProductListComponent,
    },
    {
        path: 'product/product-detail',
        component: ProductDetailComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }