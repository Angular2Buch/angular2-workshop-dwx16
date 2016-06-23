import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {
    this.books = [
      new Book('AngularJS', 'Es war schön mit dir...'), 
      new Book('Angular 2', 'Einführung in die komponentengetriebene Entwicklung...')
    ];
  }

  ngOnInit() {
  }

}
