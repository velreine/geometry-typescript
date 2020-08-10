import { Component, OnInit } from '@angular/core';

import { Rectangle } from '../rectangle';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  side_a: number = 1;
  side_b: number = 2;

  calculatedArea: number = 0;
  calculatedCircumference: number = 0;

  constructor() { }

  

  calculateAreaHandler() {
    const rectangle = new Rectangle(this.side_a, this.side_b);

    this.calculatedArea = rectangle.Area();
    this.calculatedCircumference = rectangle.Circumference();
  }

  ngOnInit(): void {
    this.calculateAreaHandler();
  }

}
