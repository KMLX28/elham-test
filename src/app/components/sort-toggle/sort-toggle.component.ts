import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HeroesQuery} from "../../akita/heroes.query";
import {NAME, POWER} from "../../akita/heroes.store";

@Component({
  selector: 'app-sort-toggle',
  templateUrl: './sort-toggle.component.html',
  styleUrls: ['./sort-toggle.component.css']
})
export class SortToggleComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  isSortedByName = false;
  isSortedByPower = false;

  constructor(private query: HeroesQuery) {
  }

  ngOnInit(): void {
    this.query.sort.subscribe(sort => (this.isSortedByName = sort === NAME));
    this.query.sort.subscribe(sort => (this.isSortedByPower = sort === POWER));
  }

  onToggle() {
    this.toggle.emit();
  }
}
