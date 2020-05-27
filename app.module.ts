import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClothingComponent,
    HeaderComponent,
    CartComponent,
    BuyerComponent,
    SellerComponent,
    GroceryComponent,
    AccessoriesComponent,
    FooterComponent,
    LoginComponent,
    ElectronicsComponent,
    CheckOutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
