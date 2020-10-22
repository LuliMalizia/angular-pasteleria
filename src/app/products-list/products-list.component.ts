import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productos : Producto[] =[
    {
    nombre: 'Tarta de frutilla',
    descripcion: 'Masa sablée, rellena de crema chantillí y queso crema, frutillas y gelatina de frutilla.',
    precio: 400,
    stock: 3,
    cantidad: 0,
  },
  {
    nombre: 'Tarta oreo',
    descripcion: 'Base de masitas oreos, relleno de crema chantillí con padazos de oreos y una cubierta de masitas oreos trituradas.',
    precio: 400,
    stock: 0,
    cantidad: 0,
  },
  {
    nombre: 'Postre balcarce',
    descripcion: 'Pionono de vainilla, crema chantillí, dulce de leche, nueces, merengue, coco, cubierta con azucar impalpable.',
    precio: 600,
    stock: 3,
    cantidad: 0,
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  upCantidad(producto: Producto):void{
    if (producto.cantidad < producto.stock)
    producto.cantidad++;
  }
  downCantidad(producto: Producto):void{
    if (producto.cantidad > 0)
    producto.cantidad--;
  }
}
