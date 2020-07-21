import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  navItems: { path: string; text: string }[] = [
    { path: '/dashboard', text: 'Dashboard' },
    { path: '/heroes', text: 'Heróis' },
  ];

  constructor(){
    //localstorage é um espaço do browser
    const randomToken = localStorage.getItem('token');
    console.log('token ->' + randomToken );

    if(!randomToken){
      const randomToken = Math.random().toString(36).substring(-10);
      console.log('randon token ->' + randomToken );
      localStorage.setItem('token',randomToken)
    }
  }
}
