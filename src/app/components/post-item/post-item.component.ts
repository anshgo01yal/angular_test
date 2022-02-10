import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/models/post.model';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post!:post;
  link!:string ;
  
  constructor() { 
  }

  ngOnInit(): void {
    this.link= `/posts/${this.post.id}`
  }

}
