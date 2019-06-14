import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStar as farStar,
  faPaperPlane
} from '@fortawesome/free-regular-svg-icons';
import {
  faStar as fasStar,
  faRedoAlt,
  faAnchor,
  faRocket,
  faCar,
  faBicycle,
  faWalking,
  faBus,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { TestUnitComponent } from './test-unit/test-unit.component';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { GameCardComponent } from './matching-game/game-card/game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TestUnitComponent,
    MatchingGameComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(
      fasStar,
      farStar,
      faRedoAlt,
      faAnchor,
      faPaperPlane,
      faRocket,
      faCar,
      faBicycle,
      faWalking,
      faBus,
      faUserSecret
    );
  }
}
