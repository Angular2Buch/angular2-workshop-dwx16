import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // HTTP-Providers nicht vergessen
import { BookComponent } from '../book';
import { CreateBookComponent } from '../create-book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreateBookComponent]
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private http: Http) {
  
    this.http.get('http://book-monkey2-api.angular2buch.de/books')
             .subscribe(response => {
               this.books = response.json().map(raw => 
                new Book(raw.title, raw.description, raw.rating))
              });
    // this.books = [
    //   new Book('AngularJS', 'Es war schön mit dir...'), 
    //   new Book('Angular 2', 'Einführung in die komponentengetriebene Entwicklung...')
    // ];
  }

  create(book: Book) {
    this.books.push(book);
  }

  sort(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
  }

  ngOnInit() {
  }

}
