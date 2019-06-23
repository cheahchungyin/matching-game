import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {
  @Output() sizeChanged = new EventEmitter<number>();
  expandMode = false;
  expandStartPosition: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('document:mousemove', ['$event.clientX'])
  onDrag(x: number) {
    if (this.expandMode) {
      this.sizeChanged.emit(x - this.expandStartPosition);
      this.expandStartPosition = x;
    }
  }

  @HostListener('document:mouseup')
  onUp() {
    this.expandMode = false;
  }

  onExpand(event: MouseEvent) {
    this.expandMode = true;
    this.expandStartPosition = event.clientX;
  }

  onCopyUrl() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = window.location.host + this.router.url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
