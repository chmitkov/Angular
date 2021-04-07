import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Output() selectRequest = new EventEmitter<Hero>();

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  title = 'Tour of Heroes';
  selectedHero?: Hero;

  heroes: Hero[] = [];


  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectRequest.emit(hero);
    this.selectedHero = hero;
    const heroSpanElement = document.getElementById('hero-name');

    if (heroSpanElement) {
      heroSpanElement.textContent = this.selectedHero.name;
    }

    this.messageService.add(`HeroesComponent: Selected hero id= ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
