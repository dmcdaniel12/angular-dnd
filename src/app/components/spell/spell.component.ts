import { Component, OnInit } from '@angular/core';
import {SpellsService} from '../../services/spells.service';
import {Spell} from '../../domain/spells';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {
  public spell: Spell;
  private id: any;

  constructor(
    private spellsService: SpellsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe(params => {
        if (params.id) {
          this.id = params.id;
        } else {
          // redirect back to spells
        }
      });


  }

  ngOnInit() {
    this.spellsService.getSpellById(this.id)
      .subscribe(data => {
          console.log(data);
          this.spell = data;
        }
      );

  }

}
