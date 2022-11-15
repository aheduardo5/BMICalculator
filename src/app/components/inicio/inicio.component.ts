import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  edad = 26;
  peso = 60;
  alturaMin = 0;
  alturaMax = 250;
  altura = 50;
  sexo = 'Masculino';
  constructor() {}

  ngOnInit(): void {}

  cambiarAltura(event: any) {
    console.log(event);
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }
  femenino(){
    this.sexo = 'Femenino';
  }
}
