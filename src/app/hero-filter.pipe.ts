import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(heroes: Hero[], filter: string): Hero[] {
    const name=filter.toUpperCase().trim();

    if(!name){
      return heroes;
    }

    return heroes.filter(
      (hero) => hero.name.toUpperCase().indexOf(name) != -1
      );
  }

}
