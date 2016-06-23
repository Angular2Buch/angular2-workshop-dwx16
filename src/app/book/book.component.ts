import { Component, OnInit, Input} from '@angular/core';
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

  constructor() {}

  rateUp() {
    this.book.rating += 1;
  }

  rateDown() {
    this.book.rating -= 1;
  }

  ngOnInit() {
  }

}
