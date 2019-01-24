import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

 marcadores: Marcador[] = [];
  lat = -17.8292022;
  lng = -63.1900278;

  constructor(private snackBar: MatSnackBar) {

   // const nuevoMarcador = new Marcador(-17.8292022, -63.1900278);
    // this.marcadores.push(nuevoMarcador);
    if ( localStorage.getItem('marcadores')) {
        this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }
  agregarMarcador(evento) {
      console.log(evento);
      const coords: { lat: number, lng: number} = evento.coords;
      const nuevoMarcador = new Marcador(coords.lat, coords.lng);
      this.marcadores.push(nuevoMarcador);
      this.guardarStorage();
      this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }
  guardarStorage() {
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
  borrarMarcador(i: number) {
     this.marcadores.splice(i, 1);
     this.guardarStorage();
     this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }
}
