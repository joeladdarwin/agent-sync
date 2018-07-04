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
  title="New Order > First Order";
  obj;
  prop; 
  constructor(private cli: ClientinfoService) { 
  
  }
  updateComments(commentForm:NgForm)
  {
    var comment = commentForm.controls['comment'].value;
    this.cli.updateComments(comment)
  }
 commentSubmit(commentForm: NgForm) {
    var comment = commentForm.controls['comment'].value;
    this.cli.updateComments(comment)
  }
  please()
{
  this.obj = ""
} 
  ngOnInit() {
    this.prop = this.cli.getBuilding2()
  }

}

