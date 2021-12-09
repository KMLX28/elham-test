import {Query} from '@datorama/akita';
import {HeroesState, HeroesStore, NAME} from "./heroes.store";
import {Injectable} from "@angular/core";
import {SortQuery} from "./sort.query";

@Injectable({
  providedIn: 'root'
})
export class HeroesQuery extends Query<HeroesState> {
  heroes = this.select('heroes');
  searchText = this.select('searchText');
  sort = this.select('sort');

  constructor(protected override store: HeroesStore) {
    super(store);
  }
}
