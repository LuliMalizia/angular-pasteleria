import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoDeProductosService } from '../carrito-de-productos.service';
import { Producto } from '../products-list/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaDelCarrito$: Observable<Producto[]>;
  constructor( private carrito: CarritoDeProductosService) { 
    this.listaDelCarrito$ = carrito.listaDelCarrito.asObservable();
    }

  ngOnInit(): void {
  }

}