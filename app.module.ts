import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { InputComponent } from './input/input.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchComponent } from './switch/switch.component';
import { Favorite2Component } from './favorite2/favorite2.component';
import { StyleComComponent } from './style-com/style-com.component';
import { InputFormatDirective } from './input-format.directive';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { HttprequestsComponent } from './httprequests/httprequests.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//firebase modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AnimationsComponent } from './animations/animations.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CourseComponent,
    FavoriteComponent,
    SummaryPipe,
    InputComponent,
    PanelComponent,
    DirectivesComponent,
    SwitchComponent,
    Favorite2Component,
    StyleComComponent,
    InputFormatDirective,
    FormComponent,
    RxjsComponent,
    HttprequestsComponent,
    NavBarComponent,
    OrdersComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
