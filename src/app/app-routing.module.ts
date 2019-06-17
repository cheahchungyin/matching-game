import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayMenuComponent } from './play/play-menu/play-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatchingGameComponent } from './play/games/matching-game/matching-game.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'play', children: [
    {path: '', component: PlayMenuComponent, pathMatch: 'full' },
    {path: 'matching-game', component: MatchingGameComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
