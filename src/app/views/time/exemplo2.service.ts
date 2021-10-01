import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Exemplo2Service {

  constructor(private snackBar: MatSnackBar) { }

  ExibeMsg(msg: string): void {
    this.snackBar.open(msg,'x',{
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition:'top' 
    })
  }
}
