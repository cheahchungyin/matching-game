import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  selected = false;


  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.selected = true;
  }
}
