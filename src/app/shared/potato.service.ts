import { Injectable } from '@angular/core';
import { Potato } from './potato.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotatoService {
  potatoesChanged = new Subject<void>();
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
      new Date()
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
}
