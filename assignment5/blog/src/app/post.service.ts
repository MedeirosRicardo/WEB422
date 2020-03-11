import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // Get posts per page
  getPosts(page, tag, category): Observable<BlogPost[]> {

    // Default apiURL
    let apiURL: string = `https://arnin-blogapi.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;

    /*// Add tag to apiURL
    if (tag !== null || tag !== undefined) {
      apiURL = apiURL + `&tag=${tag}`;
    }

    // Add category to apiURL
    if (category !== null || category !== undefined) {
      apiURL = apiURL + `&category=${category}`;
    }*/

    return this.http.get<BlogPost[]>(apiURL);
  }

  // Get post by id
  getPostByID(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://arnin-blogapi.herokuapp.com/api/posts/${id}`);
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
