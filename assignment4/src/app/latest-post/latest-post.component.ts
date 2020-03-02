import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.css']
})
export class LatestPostComponent implements OnInit {

  @Input() posts: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
