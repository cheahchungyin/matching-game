import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PotatoService, PotatoFilter } from '../../../shared/potato.service';

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

  constructor(private potatoService: PotatoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams.hasOwnProperty('query')) {
        this.query = queryParams.query;
      }
    });
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
