import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})

export class EditprofileComponent {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  
  constructor (private afStorage: AngularFireStorage){} 
    upload(event) {
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.ref.put(event.target.files[0]);
      console.log("enter your click");

    }
 

}
