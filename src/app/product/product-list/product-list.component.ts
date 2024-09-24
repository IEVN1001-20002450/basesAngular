import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string="";

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

 Productos:IProductos[]=[{
  "ProductoId":1,
  "Modelo":"Sentra",
  "Descripcion":"2 Puertas",
  "Year":"febrero 2 2020",
  "Precio": 2000,
  "Marca":"Audi",
  "Color":"Azul",
  "ImagenUrl":"https://media.gq.com.mx/photos/5d6ec5c43d0c810008e7008c/16:9/w_2560%2Cc_limit/bugatti.jpg"
 },
 {
  "ProductoId":1,
  "Modelo":"Sentra",
  "Descripcion":"4 Puertas",
  "Year":"marzo 12 2021",
  "Precio": 9,
  "Color":"Blanco",
  "Marca":"temu",
  "ImagenUrl":"https://www.elsoldeleon.com.mx/local/wrfub9-coches-5.jpg/ALTERNATES/LANDSCAPE_1140/COCHES%20(5).JPG"
 },
 {
  "ProductoId":3,
  "Modelo":"A10",
  "Descripcion":"15 Puertas",
  "Year":"Mayo 7 2023",
  "Precio": 50000,
  "Color":"Rojo",
  "Marca":"roblox",
  "ImagenUrl":"https://w7.pngwing.com/pngs/1010/341/png-transparent-vehicle-car-four-wheel-drive-roblox-game-car-game-car-video-game.png"
 }
]
}
