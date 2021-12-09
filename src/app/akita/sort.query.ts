import {Query} from '@datorama/akita';
import {HeroesState, HeroesStore, NAME, POWER} from "./heroes.store";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SortQuery extends Query<HeroesState> {
  isSortedByName = this.select(({sort}) => sort === NAME);
  isSortedByPower = this.select(({sort}) => sort === POWER);

  constructor(protected override store: HeroesStore) {
    super(store);
  }
}
