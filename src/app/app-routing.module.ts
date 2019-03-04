import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonstersComponent} from './components/monsters/monsters.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'monsters',
    component: MonstersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
