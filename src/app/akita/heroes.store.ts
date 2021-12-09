import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from "@angular/core";
import {Hero, SortTypes} from "../interfaces/Hero";

export const NAME = 'NAME';
export const POWER = 'POWER';

export interface HeroesState {
  searchText: string;
  sort: SortTypes;
  heroes: Hero[];
}

export function createInitialState(): HeroesState {
  return {
    searchText: '',
    sort: NAME,
    heroes: [],
  };
}
@StoreConfig({name: 'heroes'})
@Injectable({
  providedIn: 'root'
})
export class HeroesStore extends Store<HeroesState> {
  constructor() {
    super(createInitialState());
  }
}
