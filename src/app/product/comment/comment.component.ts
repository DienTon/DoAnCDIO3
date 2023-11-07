import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment-service/comment-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  cmtList: Comment[] = []
  users: any
  commentForm: FormGroup;
  today: any = Date.now();



  constructor(
    private commentService: CommentService,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.commentService.GetAll().subscribe(data => {
      this.cmtList = data
    })

    this.active.paramMap.subscribe(data => {
      this.users = data.get('id')
    })

  }


}
