import { Component } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import{ AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operator/map';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
  providers:[ClientinfoService]
})

export class EditprofileComponent {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  name:string;
  metadata = {
    contentType: 'image/jpeg'
  };
  downloadURL : Observable<string>;
  uploadState : Observable<string>;
  constructor (private cli: ClientinfoService, private afStorage :AngularFireStorage){
    
  } 
  ngOnInit() {
    this.name = this.cli.getUsername();
  }
  
upload(event){
  const id= this.name;
  this.ref = this.afStorage.ref('client/'+'profile/');
  this.task = this.ref.put(event.target.files[0], this.metadata);
  this.downloadURL = this.task.downloadURL();
  // this.uploadState = this.task.snapshotChanges().pipe(map(s => s.sta))
 
    console.log("enter your click"+this.downloadURL);
}

}
 


