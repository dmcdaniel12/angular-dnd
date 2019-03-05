import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonstersComponent } from './components/monsters/monsters.component';
import { AppComponent } from './app.component';
import { SpellsComponent } from './components/spells/spells.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SpellComponent } from './components/spell/spell.component';
import { MonsterComponent } from './components/monster/monster.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'monsters',
    component: MonstersComponent,
  },
  {
    path: 'monster/:id',
    component: MonsterComponent,
  },
  {
    path: 'spells',
    component: SpellsComponent,
  },
  {
    path: 'spell/:id',
    component: SpellComponent,
  },
  {
    path: 'classes',
    component: ClassesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
