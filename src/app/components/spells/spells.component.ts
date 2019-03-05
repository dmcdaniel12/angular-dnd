import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpellsService} from '../../services/spells.service';
import {takeUntil} from 'rxjs/operators';
import {Spell, SpellsObject} from '../../domain/spells';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit, OnDestroy {

  public spells: SpellsObject;
  public spell: Spell;
  private destroy$: any;

  constructor(private spellsService: SpellsService) { }

  ngOnInit() {
    this.spellsService.getAllSpells()
      .subscribe(data => {
      this.spells = data;
    });

    // this.spellsService.getSpellById(1)
    //   .subscribe(data => {
    //       this.spell = data;
    //     }
    //   );

  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();
    this.spell = null;
    this.spells = null;
  }

  public getSpellById(id) {
    this.spellsService.getSpellById(id)
      .subscribe(data => {
        this.spell = data;
      }
    );


  }

}
