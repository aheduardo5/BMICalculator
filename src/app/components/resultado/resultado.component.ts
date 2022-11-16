import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;
  constructor(private route: ActivatedRoute) { 
    this.bmi = +route.snapshot.paramMap.get('resultado')!;
    this.resultado = '';
    this.interpretacion = '';
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.bmi >=25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio y llevar una alimentación sana.'
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion	 = 'Tiene un peso corporal normal';
    }else{
      this.resultado = 'Bajo';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal.';
    }
  }
}
