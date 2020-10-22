import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PasteleriaContactoComponent } from './pasteleria-contacto/pasteleria-contacto.component';
import { PasteleriaComponent } from './pasteleria/pasteleria.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PasteleriaContactoComponent,
    PasteleriaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
