import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../BlogPost';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  blogPost: BlogPost;
  tags: string;

  private post;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post = this.route.params.subscribe(params => {
      this.data.getPostByID(params['id']).subscribe(data => {
        this.blogPost = data; 
        this.tags = data.tags.toString();
      })
    })
  }

  ngOnDestroy() {
    if (this.post) this.post.unsubscribe();
  }

  ngSubmit(f: NgForm) {
    
  }

}
