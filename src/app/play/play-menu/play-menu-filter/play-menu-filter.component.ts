import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { PotatoService, PotatoFilter } from '../../../shared/potato.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-menu-filter',
  templateUrl: './play-menu-filter.component.html',
  styleUrls: ['./play-menu-filter.component.css']
})
export class PlayMenuFilterComponent implements OnInit, OnDestroy {
  @ViewChild('filterForm', {static: true}) filterForm: NgForm;
  query = '';
  sortBy = '';
  category = '';
  status = '';
  access = '';
  potatoFilter: PotatoFilter;
  subscription: Subscription;

  constructor(private potatoService: PotatoService) { }

  ngOnInit() {
    this.subscription = this.filterForm.valueChanges.subscribe((filter) => {
      this.potatoFilter = {
        filters: [
          ['category', filter.category],
          ['status', filter.status],
          ['access', filter.access]
        ],
        query: filter.query,
        sortBy: filter.sortBy
      };
      this.potatoService.filterChanged.next(this.potatoFilter);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
