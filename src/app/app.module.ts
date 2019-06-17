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
  faUserSecret,
  faCog,
  faExpandArrowsAlt,
  faArrowsAltH,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { TestUnitComponent } from './test-unit/test-unit.component';
import { MatchingGameComponent } from './play/games/matching-game/matching-game.component';
import { GameCardComponent } from './play/games/matching-game/game-card/game-card.component';
import { GameOverlayComponent } from './play/games/matching-game/game-overlay/game-overlay.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameSettingsComponent } from './shared/game-settings/game-settings.component';
import { AuthComponent } from './auth/auth.component';
import { PlayMenuComponent } from './play/play-menu/play-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TestUnitComponent,
    MatchingGameComponent,
    GameCardComponent,
    GameOverlayComponent,
    NavbarComponent,
    GameSettingsComponent,
    AuthComponent,
    PlayMenuComponent
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
      faUserSecret,
      faCog,
      faExpandArrowsAlt,
      faArrowsAltH,
      faShareAlt
    );
  }
}
