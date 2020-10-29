import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './products-list/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoDeProductosService {

  private _listaDelCarrito: Producto[] = [];

  listaDelCarrito: BehaviorSubject<Producto[]> = new BehaviorSubject([]);

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    let item: Producto = this._listaDelCarrito.find((v1) => v1.nombre == producto.nombre);
    if(!item) {
      this._listaDelCarrito.push({ ... producto});
    } else {
      item.cantidad += producto.cantidad;
    }
    console.log(this._listaDelCarrito);
    this.listaDelCarrito.next(this._listaDelCarrito); 
  }

}
