import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Hero } from './hero.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;
  private httpOptions = {
  headers: new HttpHeaders({
       'Content-Type': 'application/json' ,
       Authorization: localStorage.getItem('token')
      }),
    };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    this.log(this.heroesUrl);
    //console.log(this.httpOptions.headers.get('Authorization'));

    return this.http.get<Hero[]>(this.heroesUrl,this.httpOptions).pipe(
      tap( ()=>this.log('obtida lista de heróis')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url,this.httpOptions).pipe(
      tap( ()=>this.log('obtida lista de heróis')),
      catchError(this.handleError<Hero>('getHero'))
    );
  }

  updateHero(heroi:Hero ):Observable<Hero>{
    const url = `${this.heroesUrl}/${heroi.id}`;

    return this.http.put<Hero>(url,heroi,this.httpOptions).pipe(
      tap( ()=>this.log(`atualizado ${heroi.id}`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  addHero(heroi:Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,heroi,this.httpOptions).pipe(
      tap( (newHero)=>this.log(`adicionando ${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(heroi:Hero):Observable<any>{
    const url = `${this.heroesUrl}/${heroi.id}`;

    return this.http.delete<Hero>(url,this.httpOptions).pipe(
      tap( ()=>this.log(`excluindo  ${heroi.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string):Observable <Hero[]>{
    if( !term.trim()) {
      return of([]);
    }
    console.log(`${this.heroesUrl}/?name=${term}`);
    return this.http
    .get<Hero[]>(`${this.heroesUrl}/?name=${term}`, this.httpOptions)
    .pipe(
      tap((heroes) =>
        heroes && heroes.length
          ? this.log(`encontrado "${term}"`)
          : this.log(`não encontrado "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );


  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError <T>(operation = 'operation',result?:T){
    return (error: any):Observable<T> => {
      //logar no console o erro
      console.log(error);
      //logar no message qual o erro
      this.log(`${operation} failed: ${error.message} `)
      //retornar um objeto do mesmo tipo de onde veio o erro
      return of(result as T);
    }
  }

}
