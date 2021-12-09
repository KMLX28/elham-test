import {Component, OnInit} from '@angular/core';
import {HeroesQuery} from "../akita/heroes.query";
import {Hero} from "../interfaces/Hero";
import {ActivatedRoute} from "@angular/router";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero?: Hero;

  constructor(private query: HeroesQuery, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.query.heroes
    ])
      .subscribe(([params, heroes]) => {
        console.log(heroes);
        this.hero = heroes.find(hero => {
          console.log(hero.name, params.get('name'));
          return hero.name === params.get('name');
        });
        console.log(this.hero);
      });
  }

}
