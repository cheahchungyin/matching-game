import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-overlay',
  templateUrl: './game-overlay.component.html',
  styleUrls: ['./game-overlay.component.css']
})
export class GameOverlayComponent implements OnInit {
  @Output() closedSignal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.closedSignal.emit();
  }
}
