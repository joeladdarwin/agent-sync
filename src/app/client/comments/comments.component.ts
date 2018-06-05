import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [ClientinfoService]
})
export class CommentsComponent implements OnInit {

  constructor(private cli: ClientinfoService) { 

  }
  updatecomment(commentForm:NgForm)
  {
    var comment = commentForm.controls['comment'].value;
    this.cli.updateComments(comment)
  }
  ngOnInit() {
  }

}
