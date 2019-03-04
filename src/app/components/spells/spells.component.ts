import { Component, OnInit } from '@angular/core';
import {SpellsService} from '../../services/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  private spells: Object;

  constructor(private spellsService: SpellsService) { }

  ngOnInit() {
    this.spellsService.getAllSpells().subscribe(data => {this.spells = data; console.log(data); });

  }

}
