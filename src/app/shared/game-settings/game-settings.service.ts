import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Coordinates {
  x: number;
  y: number;
}

@Injectable({providedIn: 'root'})
export class GameSettingsService {
  expandSignal = new Subject<Coordinates>();
}
