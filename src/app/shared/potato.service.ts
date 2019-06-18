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
      'A browser-based card matching game that presents the player with cards arranged in a 4x4 grid. ',
      '/matching-game',
      'Games',
      'Beta',
      'Chingu Voyage',
      'Public',
      [],
      new Date(2019, 5, 18)
    ),
    new Potato(
      'The Matching Game',
      '',
      '/matching-game',
      'Games',
      'Beta',
      'Chingu Voyage',
      'Public',
      [],
      new Date(2019, 5, 18)
    )
  ];

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
