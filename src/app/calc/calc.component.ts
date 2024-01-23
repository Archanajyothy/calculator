import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  number1: number;
  number2: number;
  result: number;

  add(){
    this.result = this.number1 + this.number2
  }
}
