import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { photos } from 'src/models/photo.model';

@Component({
  selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.css']
})
export class PhotoAlbumsComponent implements OnInit {
  posts:photos[]=[];
  loggedIn:boolean=false;
  constructor(private postsServices: PostsService) { 
    if(!window.localStorage.getItem('token')){
      window.location.href='/'
    } else{
      this.loggedIn=true
    }
    
  }

  ngOnInit(): void {
    this.postsServices.getPhotots().subscribe(post => {
      return this.posts = post.filter(p => (p.id < 11));
    })
  }

}
