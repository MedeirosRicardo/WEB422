import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit, OnDestroy {

  constructor(private data: PostService) { }

  blogPosts: Array<BlogPost>;

  private posts;

  ngOnInit(): void {
    this.posts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

  ngOnDestroy(): void {
    if (this.posts) this.posts.unsubscribe();
  }

}
