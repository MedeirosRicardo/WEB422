import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // Get all posts
  getAllPosts(): Observable<BlogPost[]> {
    const perPage = Number.MAX_SAFE_INTEGER.toString();

    let params = {
      page: "1",
      perPage: perPage
    }

    return this.http.get<BlogPost[]>(`https://arnin-blogapi.herokuapp.com/api/posts`, { params });
  }

  // Get posts per page
  getPosts(page, tag, category): Observable<BlogPost[]> {
    const perPage = 6;
    
    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if (tag != null || tag != undefined) {
      params["tag"] = tag;
    }

    if (category != null || category != undefined) {
      params["category"] = category;
    }

    return this.http.get<BlogPost[]>(`https://arnin-blogapi.herokuapp.com/api/posts`,{ params });
  }

  // Get post by id
  getPostByID(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://arnin-blogapi.herokuapp.com/api/posts/${id}`);
  }

  // Create new post
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://arnin-blogapi.herokuapp.com/api/posts`, data);
  }

  // Update post
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://arnin-blogapi.herokuapp.com/api/posts/${id}`, data);
  }

  // Delete post
  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://arnin-blogapi.herokuapp.com/api/posts/${id}`);
  }

  // Get categories
  getCategories(): Observable<any> {
    return this.http.get<any>(`https://arnin-blogapi.herokuapp.com/api/categories`);
  }

  // Get tags
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://arnin-blogapi.herokuapp.com/api/tags`);
  }

}
