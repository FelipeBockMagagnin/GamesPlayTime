import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesService } from 'src/services/games.service';
import { GamesModule } from 'src/pages/games/games.module';
import { CreatorsComponent } from '../pages/creators/creators.component';
import { GameDetailComponent } from '../pages/game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorsComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GamesModule
    ],
  providers: [ GamesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
