import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero :Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location : Location) { }

  ngOnInit(): void {
    //o + transfoma a string em number
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero= hero);
  }

  goBack(){
    console.log('back')
    this.location.back();
  }

  update(){
    console.log('update')
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  delete(){
    console.log('update')
    this.heroService.deleteHero(this.hero).subscribe(() => this.goBack());
  }
}
