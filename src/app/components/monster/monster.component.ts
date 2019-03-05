import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from '../../domain/monsters';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  public monster: Monster
  private id: any;

  constructor(
      private monsterService: MonstersService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params
        .subscribe(params => {
          if (params.id) {
            this.id = params.id;
          } else {
            // redirect back to monsters
          }
        });


  }

  ngOnInit() {
    this.monsterService.getMonster(this.id).subscribe(monster => { this.monster = monster; });
  }

}
