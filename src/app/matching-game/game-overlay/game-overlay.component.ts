import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-overlay',
  templateUrl: './game-overlay.component.html',
  styleUrls: ['./game-overlay.component.css']
})
export class GameOverlayComponent implements OnInit {
  @Output() closedSignal: EventEmitter<void> = new EventEmitter();
  @Input() message = ['Matching Game', 'Click on a Card to begin!'];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.closedSignal.emit();
  }
}
