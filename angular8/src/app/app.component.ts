import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    title = 'mobile-login';
    _window = window as any;
  
    ngOnInit() {
  }
  }
