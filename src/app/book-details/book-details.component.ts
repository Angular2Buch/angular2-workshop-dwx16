import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'br-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.title = params['title'] });
  }

}
