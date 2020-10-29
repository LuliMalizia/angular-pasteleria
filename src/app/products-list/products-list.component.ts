import { Component, OnInit } from '@angular/core';
import { CarritoDeProductosService } from '../carrito-de-productos.service';
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
  {
    nombre: 'Budines',
    descripcion: 'Budines marmolados, con chips, de vainilla, chocolate, limón y muchos más.',
    precio: 150,
    stock: 0,
    cantidad: 0,
  },
  {
    nombre: 'Tortas',
    descripcion: 'Tortas de cumpleaños con bizcochulos de vainilla o chocolate, rellena de lo que mas les guste. El precio es por kilo.',
    precio: 500,
    stock: 10,
    cantidad: 0,
  },
  {
    nombre: 'Tarta frutal',
    descripcion: 'Masa sablée, rellena de crema chantillí con kiwi, frutillas, banana y durazno. ',
    precio: 400,
    stock: 4,
    cantidad: 0,
  },
  {
    nombre: 'Muffins',
    descripcion: 'Sabor chocolate o vainilla rellenos de dulce de leche o nutella, decorado con crema chantillí o merengue suizo. Ideales para cumpleaños o mesas dulces. El precio es por 6 unidades.',
    precio: 350,
    stock: 0,
    cantidad: 0,
  },
  ]
  
  constructor( private carrito: CarritoDeProductosService) { 
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto) : void{
    this.carrito.agregarAlCarrito(producto); 
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }

  maxAlcanzado(m: string){
    alert (m);
  }
}
