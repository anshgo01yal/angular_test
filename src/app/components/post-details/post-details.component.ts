import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';
import { post } from 'src/models/post.model';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id!: string | null
  post!: post;
  loggedIn:boolean=false;
  constructor(private route: ActivatedRoute,private postsServices: PostsService) {
    if(!window.localStorage.getItem('token')){
      window.location.href='/'
    } else{
      this.loggedIn=true
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postsServices.getPostsById(this.id).subscribe(post => {
      
      return this.post = (post);
    })
  }

}
