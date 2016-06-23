import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-create-book',
  templateUrl: 'create-book.component.html',
  styleUrls: ['create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  @Output() bookCreated: EventEmitter<Book>;

  constructor() {
    this.bookCreated = new EventEmitter<Book>();
  }

  create(title, description) {
    this.bookCreated.emit(new Book(title.value, description.value))
    title.value = description.value = '';
  }

  ngOnInit() {
  }

}
