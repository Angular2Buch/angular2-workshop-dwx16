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

  create(title, description) {
    this.books.push(new Book(title.value, description.value));

    title.value = description.value = '';
  }

  sort(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
  }

  ngOnInit() {
  }

}
