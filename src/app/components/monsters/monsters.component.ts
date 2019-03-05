import {Component, OnDestroy, OnInit} from '@angular/core';
import {MonstersService} from '../../services/monsters.service';

@Component({
  selector: 'app-monsters-component',
  templateUrl: './monsters.component.html'
})

export class MonstersComponent implements OnInit, OnDestroy {

  constructor (private monsterService: MonstersService) {  }

  ngOnInit(): void {
    // this.monsterService.getAllMonsters().subscribe();
  }

  ngOnDestroy(): void {
  }

}
