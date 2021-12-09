import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Hero} from "../interfaces/Hero";
import {HeroesStore} from "../akita/heroes.store";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient, private store: HeroesStore) {
  }

  fetchHeroes() {
    this.httpClient
        .get<Hero[]>(`${environment.baseUrl}/heroes`)
        .subscribe(heroes => this.store.update({heroes: heroes}));
  }
}
