import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  template: `
    <app-search-input [label]="'Procurar'"(search)="onSearch($event)"> </app-search-input>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let heroi of heroes$ | async">
        <a routerLink="/dashboard/{{ heroi.id }} ">
          {{heroi.name}}
        </a>
      </li>
    </ul>
  `
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService  ) { }

  ngOnInit(): void {
    this.geetHeroes();
  }

  geetHeroes(){
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.heroService.searchHeroes(term))
    );
  }

  onSearch(term :string){
    this.searchTerms.next(term);
  }
}
