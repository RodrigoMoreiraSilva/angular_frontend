import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  constructor() { }

  chamadaServico(msg: string) : void {
    console.log(msg)
  }
}
