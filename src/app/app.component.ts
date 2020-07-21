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
    const token = localStorage.getItem('token');
    console.log('construido token ->' + token );

    if(!token){
      const token = Math.random().toString(36).substring(-10);
      console.log('randon token ->' + token );
      localStorage.setItem('token',token)
    }
  }
}
