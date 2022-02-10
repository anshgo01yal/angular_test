import { Injectable } from '@angular/core';
import { post } from 'src/models/post.model';
import { photos } from 'src/models/photo.model';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
  "Content-Type": "application/json"
})}


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = "https://jsonplaceholder.typicode.com";
  constructor(private http:HttpClient) { }

  getPosts():Observable<post[]>{
    console.log(this.apiUrl)
    return this.http.get<post[]>(`${this.apiUrl}/posts`)
  }
  getPostsById(id:string|null):Observable<post>{
    console.log(this.apiUrl)
    return this.http.get<post>(`${this.apiUrl}/posts/${id}`)
  }
  getPhotots():Observable<photos[]>{
    console.log(this.apiUrl)
    return this.http.get<photos[]>(`${this.apiUrl}/photos`)
  }
}
