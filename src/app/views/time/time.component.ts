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

    /* if(this.propId == 'Antes')
      this.propId = 'Depois'
    else
      this.propId = 'Antes' */

    this.propId == 'Antes' ? this.propId = 'Depois' : this.propId = 'Antes'
  }
}
