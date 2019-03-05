import { Component, OnInit } from '@angular/core';
import {ClassesService} from '../../services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  public classes: Object;

  constructor(private classesService: ClassesService) { }

  ngOnInit() {

    this.classesService.getAllClasses().subscribe(classes => {
      this.classes = classes.results;
    });

  }

}
