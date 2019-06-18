import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PotatoService } from '../../../shared/potato.service';

import { Potato } from '../../../shared/potato.model';

@Component({
  selector: 'app-play-menu-list',
  templateUrl: './play-menu-list.component.html',
  styleUrls: ['./play-menu-list.component.css']
})
export class PlayMenuListComponent implements OnInit {
  potatoes: Potato[] = [];
  subscription: Subscription;

  constructor(private potatoService: PotatoService) { }

  ngOnInit() {
    this.potatoes = this.potatoService.getAll();
    this.subscription = this.potatoService.potatoesChanged.subscribe(() => {
      this.potatoes = this.potatoService.getAll();
    });
  }

}
