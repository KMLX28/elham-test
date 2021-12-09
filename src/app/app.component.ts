import {Component, OnInit} from '@angular/core';
import {HeroesStore} from "./akita/heroes.store";
import {HeroesQuery} from "./akita/heroes.query";
import {HeroesService} from "./services/heroes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroesService.fetchHeroes();
  }
}
