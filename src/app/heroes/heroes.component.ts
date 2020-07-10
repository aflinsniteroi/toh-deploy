import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import {  } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  filter ='';

  constructor(private heroeService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(){
    this.heroeService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  delete(heroi: Hero){
    this.heroeService.deleteHero(heroi).subscribe((response) => {
      if (typeof response !== 'undefined') {
        this.heroes = this.heroes.filter((heroItem) => heroItem !== heroi);
      }
    });
  }

 onAdd(name: string){
    this.heroeService.addHero({name} as Hero ).subscribe(hero => {
      if(hero){
        this.heroes.push(hero);
      }
    });
 }

 onFilter(term: string){
  this.filter=term;
}
}
