import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit, OnDestroy {

  blogPosts: Array<BlogPost> = [];

  private posts;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.data.getAllPosts().subscribe(data => this.blogPosts = data);
  }

  ngOnDestroy() {
    if (this.posts) this.posts.unsubscribe();
  }

}
