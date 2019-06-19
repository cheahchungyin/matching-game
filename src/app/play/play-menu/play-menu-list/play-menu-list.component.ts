import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PotatoService } from '../../../shared/potato.service';

import { Potato } from '../../../shared/potato.model';

@Component({
  selector: 'app-play-menu-list',
  templateUrl: './play-menu-list.component.html',
  styleUrls: ['./play-menu-list.component.css']
})
export class PlayMenuListComponent implements OnInit, OnDestroy {
  potatoes: Potato[] = [];
  potatoesCount: number;
  filteredPotatoesCount: number;

  potatoesSubscription: Subscription;
  filterSubscription: Subscription;

  constructor(private potatoService: PotatoService) { }

  ngOnInit() {
    this.potatoes = this.potatoService.getAll();
    this.potatoesCount = this.potatoService.getCount();
    this.filteredPotatoesCount = this.potatoesCount;

    this.potatoesSubscription = this.potatoService.potatoesChanged.subscribe(() => {
      this.potatoes = this.potatoService.getFiltered(this.potatoService.filterChanged.value);
      this.potatoesCount = this.potatoService.getCount();
      this.filteredPotatoesCount = this.potatoes.length;
    });

    this.filterSubscription = this.potatoService.filterChanged.subscribe(() => {
      this.potatoes = this.potatoService.getFiltered(this.potatoService.filterChanged.value);
      this.filteredPotatoesCount = this.potatoes.length;
    });
  }

  ngOnDestroy() {
    this.potatoesSubscription.unsubscribe();
  }
}
