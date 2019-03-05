import {Component, OnDestroy, OnInit} from '@angular/core';
import {MonstersService} from '../../services/monsters.service';
import {Monsters} from '../../domain/monsters';

@Component({
  selector: 'app-monsters-component',
  templateUrl: './monsters.component.html'
})

export class MonstersComponent implements OnInit, OnDestroy {
  public monsters: Monsters;

  constructor (private monsterService: MonstersService) {  }

  ngOnInit(): void {
    this.monsterService.getAllMonsters().subscribe(monsters => { this.monsters = monsters; });
  }

  ngOnDestroy(): void {
  }

}
