import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  propId = 'Antes'

  constructor() { }

  ngOnInit(): void {
  }

  bindDeEvento(): void {
    console.log('Fazendo algo!')

    this.propId = 'Depois'
  }
}
