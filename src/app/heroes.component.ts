import { Component,OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],  
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit():void {
    this.heroService.getHeroesSlowly().then(heroes=>{this.heroes=heroes;});
  }
}
