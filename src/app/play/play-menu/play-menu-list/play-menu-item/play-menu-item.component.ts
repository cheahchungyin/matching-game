import { Component, OnInit, Input } from '@angular/core';
import { Potato } from '../../../../shared/potato.model';

@Component({
  selector: 'app-play-menu-item',
  templateUrl: './play-menu-item.component.html',
  styleUrls: ['./play-menu-item.component.css']
})
export class PlayMenuItemComponent implements OnInit {
  @Input() potato: Potato;
  categoryIcons = {
    Games: ['fas', 'dice'],
    Utilities: ['fas', 'calculator']
  };

  constructor() { }

  ngOnInit() {
  }

}
