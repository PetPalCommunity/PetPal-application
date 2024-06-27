import { Component, Input } from '@angular/core';

interface CommunityPost {
  communityName: string;
  communityPicture: string;
  date: string;
  postPicture: string;
  postDescription: string;
  likeCount: number;
  isLiked: boolean;
  comments: { author: string, text: string }[]; // Add comments array
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: CommunityPost;
  @Input() descriptionLimit: number = 100;
  showFullText: boolean = false;
  showCommentInput: boolean = false; // Manage visibility of comment input
  newComment: string = '';

  toggleText() {
    this.showFullText = !this.showFullText;
  }

  shouldShowMoreButton(): boolean {
    return this.post.postDescription.length > this.descriptionLimit;
  }

  toggleLike() {
    if (this.post.isLiked) {
      this.post.likeCount--;
    } else {
      this.post.likeCount++;
    }
    this.post.isLiked = !this.post.isLiked;
  }

  toggleCommentInput() {
    this.showCommentInput = !this.showCommentInput;
  }

  addComment() {
    if (this.newComment.trim()) {
      this.post.comments.push({ author: 'Current User', text: this.newComment.trim() });
      this.newComment = '';
      this.showCommentInput = false; // Hide input after posting
    }
  }
}
