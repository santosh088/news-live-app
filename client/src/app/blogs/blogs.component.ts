import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

   blogstext:string = "";
   blogs ="";

  constructor(private blogService:BlogsService) { }

  ngOnInit(): void {
  }

  getBlogs() {
  this.blogService.getBlogs().
  subscribe(data=>{
    this.blogstext  = data;
    console.log(this.blogstext);
  });
  // this.blogstext = this.blogs;
  }

}
