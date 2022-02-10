import { Component, Input, OnInit } from '@angular/core';
import { photos } from 'src/models/photo.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() post!:photos;
  constructor() { }

  ngOnInit(): void {
  }

}
