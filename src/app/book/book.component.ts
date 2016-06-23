import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {

  // Öffentliche Schnittstelle definieren
  // Eine Komponente Book bekommt ein Buch überreicht...
  @Input() book: Book;
  @Output() rated: EventEmitter<Book>;

  constructor() {
    this.rated = new EventEmitter<Book>();
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  ngOnInit() {
  }

}
