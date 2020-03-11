import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page;

  @Output() newPage = new EventEmitter();

  // Previous page
  btnPrevPage() {
    if (this.page > 1) {
      this.page--;
      this.newPage.emit(this.page);
    }
  }
  
  // Next page
  btnNextPage() {
    this.page++;
    this.newPage.emit(this.page);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
