import { Component } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import{ AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
<<<<<<< HEAD
import { ClientinfoService } from '../../shared/clientinfo.service';
=======
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operator/map';

>>>>>>> 9d2b79152462af973075609a9be1145259393bb6


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
<<<<<<< HEAD
  providers: [ClientinfoService]

=======
  providers:[ClientinfoService]
>>>>>>> 9d2b79152462af973075609a9be1145259393bb6
})

export class EditprofileComponent {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url;
  constructor (private afStorage: AngularFireStorage, private cli: ClientinfoService) {}
   
    upload(event) {
    
      // const id = Math.random().toString(36).substring(2);
    
      // this.ref = this.afStorage.ref('client/'+'profile/'+id);
      // this.task = this.ref.put(event.target.files[0]);
      console.log("enter your click");
      this.cli.uploadprofileimage(event);
  

    }
  ngOnInit() {
    this.url = this.cli.geturl();
  }

}
 


