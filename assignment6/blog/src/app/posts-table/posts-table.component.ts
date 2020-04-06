import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost } from '../../BlogPost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit, OnDestroy {

  blogPosts: Array<BlogPost> = [];

  private posts;

  constructor(private data: PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.data.getAllPosts().subscribe(data => this.blogPosts = data);
  }

  ngOnDestroy() {
    if (this.posts) this.posts.unsubscribe();
  }

  rowClicked(e, id) {
    this.router.navigate(['/admin/post', id]);
  }

}
