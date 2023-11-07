import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './home/navigation/navigation.component';
import { InfoAcountComponent } from './auth/info-acount/info-acount.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddCartComponent } from './cart/add-cart/add-cart.component';
import { PaymentProductComponent } from './cart/payment-product/payment-product.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListbrandComponent } from './home/listbrand/listbrand.component';
import { SlideComponent } from './home/slide/slide.component';
import { SaleDetailComponent } from './product/sale/sale-detail/sale-detail.component';
import { SaleProductComponent } from './product/sale/sale-product/sale-product.component';
import { CommentComponent } from './product/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SlideComponent,
    CarouselComponent,
    FooterComponent,
    ListbrandComponent,
    RegisterComponent,
    LoginComponent,
    SaleProductComponent,
    SaleDetailComponent,
    PaymentProductComponent,
    AddCartComponent,
    InfoAcountComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    // BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
