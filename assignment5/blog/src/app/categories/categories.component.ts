import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any> = [
    { cat: "Crime", num: 2 },
    { cat: "Comedy", num: 1 },
    { cat: "Musical", num: 1 },
    { cat: "Adventure", num: 2 },
    { cat: "Drama", num: 2 },
    { cat: "Action", num: 2 },
    { cat: "Documentary", num: 1 },
    { cat: "Thriller", num: 1 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
