import { Component, OnInit, Input } from '@angular/core';

// Import Mock Data
import blogData from '../../blogData.json';
import { BlogPost } from '../../BlogPost'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogPosts: Array<BlogPost> = blogData;

  @Input() post: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
