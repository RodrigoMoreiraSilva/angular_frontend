import { Exemplo2Service } from './exemplo2.service';
import { ExemploService } from './exemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  propId = 'Antes'

  constructor(private exemploService: ExemploService,private exemplo2Service: Exemplo2Service) { }

  ngOnInit(): void {
  }

  bindDeEvento(): void {
    console.log('Fazendo algo!')

    /* if(this.propId == 'Antes')
      this.propId = 'Depois'
    else
      this.propId = 'Antes' */

    this.propId == 'Antes' ? this.propId = 'Depois' : this.propId = 'Antes'
  }

  chamaServico(): void {
    this.exemploService.chamadaServico('Método de um serviço!')
  }

  mostrarMsg(): void{
    this.exemplo2Service.ExibeMsg('Esta é a mensagem do serviço Exemplo 2!')
  }

}
