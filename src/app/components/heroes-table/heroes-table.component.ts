import {Component, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/Hero";
import {HeroesQuery} from "../../akita/heroes.query";
import {HeroesStore} from "../../akita/heroes.store";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})
export class HeroesTableComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private query: HeroesQuery, private store: HeroesStore, private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.query.heroes.subscribe(heroes => (this.heroes = heroes));
    this.query.searchText.subscribe(
      text => text.trim() === '' ?
              (this.heroes = this.store.getValue().heroes) :
              (this.heroes = this.heroesService.filterHeroes(text))
    );

    this.query.sort.subscribe(sort => (this.heroes = this.heroesService.sortHeroes(this.heroes, sort)));
  }
}
