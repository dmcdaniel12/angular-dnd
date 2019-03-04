import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpellsService} from '../../services/spells.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit, OnDestroy {

  public spells: Object;
  private destroy$: any;

  constructor(private spellsService: SpellsService) { }

  ngOnInit() {
    this.spellsService.getAllSpells()
      .subscribe(data => {
      this.spells = data.results;
    });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
