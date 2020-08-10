import { Component, OnInit } from '@angular/core';
import { Quadrant } from '../quadrant';


@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.css']
})
export class QuadrantComponent implements OnInit {

  sidelength: number = 1;

  calculatedArea: number = 0;
  calculatedCircumference: number = 0;

  constructor() { }

  calculateAreaHandler() {
    let quadrant = new Quadrant(this.sidelength);

    this.calculatedArea = quadrant.Area();
    this.calculatedCircumference = quadrant.Area();

  }

  ngOnInit(): void {
    this.calculateAreaHandler();
  }

}
