import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.css']
})
export class LatestPostComponent implements OnInit {

  constructor(private data: PostService) { }

  blogPosts: Array<BlogPost>;

  private posts;

  ngOnInit(): void {
    this.posts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

}
