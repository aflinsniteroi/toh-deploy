import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages : string[ ] = [];

  getMessages():string[]{
    return this.messages;
  }

  add(mensagem: string){
    this.messages.push(mensagem);
  }

  clear(){
    this.messages=[];
  }
}
