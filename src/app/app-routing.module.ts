import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AnimationsComponent } from './animations/animations.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path:'products', component:ProductsComponent },
  { path:'orders', component:OrdersComponent },
  { path:'admin/orders', component:AdminOrdersComponent },
  { path:'admin/products', component:AdminProductsComponent },
  { path:'cart', component:ShoppingCartComponent },
  { path:'animations', component:AnimationsComponent},
  { path:'todo', component:TodosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
