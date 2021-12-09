import { Component, OnInit } from '@angular/core';
import {HeroesStore, NAME, POWER} from "../../akita/heroes.store";
import {HeroesQuery} from "../../akita/heroes.query";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  title = 'Heroes';
  sort = NAME;

  constructor(private store: HeroesStore, private heroesQuery: HeroesQuery) {
    this.heroesQuery.sort.subscribe(sort => (this.sort = sort));
  }

  setSearchText(text: string) {
    this.store.update({searchText: text});
  }

  setSort() {
    this.store.update({sort: this.sort === NAME ? POWER : NAME});
  }

}
