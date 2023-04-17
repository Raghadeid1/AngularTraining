import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
  { path:'products', component:ProductsComponent },
  { path:'orders', component:OrdersComponent },
  { path:'admin/orders', component:AdminOrdersComponent },
  { path:'admin/products', component:AdminProductsComponent },
  { path:'cart', component:ShoppingCartComponent },
  { path:'animations', component:AnimationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
