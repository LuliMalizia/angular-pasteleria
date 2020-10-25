import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PasteleriaContactoComponent } from './pasteleria-contacto/pasteleria-contacto.component';
import { PasteleriaComponent } from './pasteleria/pasteleria.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component'



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PasteleriaContactoComponent,
    PasteleriaComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
