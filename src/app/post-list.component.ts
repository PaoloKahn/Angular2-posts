import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from './post.service';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {

   posts: Post[];
   comments : Comment[];

   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {

   }

   ngOnInit(): void {
     this.postService.getAllPosts().subscribe(data => this.posts = data);
     console.log(posts)
   }

   //+1 aangezien index vanaf 0 begint bij loop en 1 in opde site
   getComments(index: number): void {
     this.postService. getCommentsForPost(index +1).subscribe(data => this.printComments(data));
   }


   printComments(comments: Comment[]): void {

     for (let entry of comments) {
       console.log(entry.name);
       //this.commentsFound.emit(entry.name);
}
   }
}
