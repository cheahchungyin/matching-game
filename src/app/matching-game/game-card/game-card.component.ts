import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() symbolIndex: number;
  @Input() fixed = false;
  selected = false;
  symbols = [
    ['fas', 'anchor'],
    ['far', 'paper-plane'],
    ['fas', 'rocket'],
    ['fas', 'car'],
    ['fas', 'bicycle'],
    ['fas', 'walking'],
    ['fas', 'bus'],
    ['fas', 'user-secret']
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (!this.fixed) {
      this.selected = !this.selected;
    }
  }
}
