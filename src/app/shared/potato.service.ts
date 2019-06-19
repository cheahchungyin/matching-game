import { Injectable, Query } from '@angular/core';
import { Potato } from './potato.model';
import { BehaviorSubject, Subject } from 'rxjs';

export interface PotatoFilter {
  filters: string[][];
  query: string;
  sortBy: string;
}

@Injectable({
  providedIn: 'root'
})
export class PotatoService {
  potatoesChanged = new Subject<void>();
  defaultFilter: PotatoFilter = {
    filters: [],
    sortBy: '',
    query: ''
  };
  filterChanged = new BehaviorSubject<PotatoFilter>(this.defaultFilter);
  private potatoes: Potato[] = [
    new Potato(
      'The Matching Game',
      'Chung Yin',
      'A browser-based card matching game that presents the player with cards arranged in a 4x4 grid. ',
      '/play/matching-game',
      'Games',
      'Beta',
      'Chingu Voyage',
      'Public',
      [],
      new Date(2019, 5, 18)
    ),
    new Potato(
      'Mars Photo Search API',
      'Chung yin',
      'An application that provides users with the ability to search for photos taken by NASA\'s Curiosity Mars rover.',
      '/play',
      'Utilities',
      'Pre-alpha',
      'Chingu Voyage',
      'Private',
      [],
      new Date()
    ),
    new Potato(
      'Box Packing Calculator',
      'Chung yin',
      'This calculator computes the best combination for items of different sizes and weights to be packed into a finite number of boxes.',
      '/play',
      'Utilities',
      'Release',
      'Mom',
      'Private',
      [],
      new Date(2019, 5, 10)
    )
  ];

  // length of array
  getCount() {
    return this.potatoes.length;
  }

  // Get
  getAll() {
    return this.potatoes.slice();
  }

  getOne(id: number) {
    return this.potatoes[id];
  }

  getSome(startingId: number = 0, amount: number = 10) {
    return this.potatoes.slice(startingId, startingId + amount);
  }

  getFiltered(potatoFilter: PotatoFilter) {
    const filtered = this.potatoes.filter((potato) => {
      // filters
      for (const filter of potatoFilter.filters) {
        if ((filter[1] !== '') && (potato[filter[0]] !== filter[1])) {
          return false;
        }
      }
      // query
      const query = new RegExp(potatoFilter.query, 'i')
      if (! query.test(potato.name)) {
        return false;
      }
      return true;
    });
    if (potatoFilter.sortBy !== '') {
      this.sortPotatoes(filtered, potatoFilter.sortBy);
    }
    return filtered;
  }

  private sortPotatoes(arr: Potato[], sortBy: string) {
    if (sortBy === 'date') {
      arr.sort((a, b) => {
        console.log(a.name, a.date);
        return b.date.getTime() - a.date.getTime();
      });
    } else {
      arr.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) { return -1; }
        if (a[sortBy] > b[sortBy]) { return 1; }
        return 0;
      });
    }
    return arr;
  }
}
