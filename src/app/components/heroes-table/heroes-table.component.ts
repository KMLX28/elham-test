import {Component, OnInit} from '@angular/core';
import {Hero, SortTypes} from "../../interfaces/Hero";
import {HeroesQuery} from "../../akita/heroes.query";
import {HeroesStore, NAME} from "../../akita/heroes.store";

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})
export class HeroesTableComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private query: HeroesQuery, private store: HeroesStore) {
  }

  ngOnInit(): void {
    this.query.heroes.subscribe(heroes => (this.heroes = heroes));
    this.query.searchText.subscribe(
      text => text.trim() === '' ?
              (this.heroes = this.store.getValue().heroes) :
              (this.heroes = this.filterHeroes(text))
    );

    this.query.sort.subscribe(sort => (this.heroes = this.sortHeroes(sort)));
  }
  // the logic below can be moved to a service...
  filterHeroes(text: string) {
    return this.heroes.filter(hero => {
      text = text.toLowerCase();
      return hero.name.toLowerCase().includes(text) || hero.powers.toLowerCase().includes(text);
    });
  }

  sortHeroes(sort: SortTypes) {
    return this.heroes.sort((hero1, hero2) =>
      sort === NAME ?
      hero1.name.localeCompare(hero2.name) :
      hero1.powers.localeCompare(hero2.powers)
    );
  }
}
