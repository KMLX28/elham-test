import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Hero, SortTypes} from "../interfaces/Hero";
import {HeroesStore, NAME} from "../akita/heroes.store";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient, private store: HeroesStore) {
  }

  fetchHeroes() {
    this.httpClient
        .get<Hero[]>(`${environment.baseUrl}/heroes`)
        .subscribe(heroes => this.store.update({heroes: this.sortHeroes(heroes, NAME)}));
  }

  filterHeroes(text: string) {
    return this.store.getValue().heroes.filter(hero => {
      text = text.toLowerCase();
      return hero.name.toLowerCase().includes(text) || hero.powers.toLowerCase().includes(text);
    });
  }

  sortHeroes(heroes: Hero[], sort: SortTypes) {
    return heroes.sort((hero1, hero2) =>
      sort === NAME ?
      hero1.name.localeCompare(hero2.name) :
      hero1.powers.localeCompare(hero2.powers)
    );
  }

}
