import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonstersComponent } from './components/monsters/monsters.component';
import { SpellsComponent } from './components/spells/spells.component';
import { MonstersService } from './services/monsters.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MonstersComponent,
    SpellsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    MonstersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
