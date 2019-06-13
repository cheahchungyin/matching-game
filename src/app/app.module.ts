import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
