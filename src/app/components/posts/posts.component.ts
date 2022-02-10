import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { post } from 'src/models/post.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:post[]=[];
  constructor(private postsServices: PostsService) { }

  ngOnInit(): void {
    
    this.postsServices.getPosts().subscribe(post => {
      
      return this.posts = post.filter(p => (p.id < 11));
    })
  }


}
