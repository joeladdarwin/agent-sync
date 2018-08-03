import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})

export class EditprofileComponent {
  selectedFile:File=null;
 constructor(private http: HttpClient){}
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd =new FormData();
    fd.append('image', this.selectedFile,this.selectedFile.name)
    this.http.post('https://us-central1-agent-sync-sonder.cloudfunctions.net/helloWorld',fd, {
      reportProgress:true,
      observe:'events'

    } )
    .subscribe(event =>{
      console.log(event);
    });
  }
 

}
