import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent {
  members = Array<User>();
  addfal = false;
  constructor(private dataService : DataService,private http : HttpClient,
    private dialogref : MatDialogRef<AddmemberComponent>){
   this.members = dataService.members;
  }
  addmember(name :string,email : string,password : string){
    if(email=="" || password==""){
      this.addfal = true;
    }else{
    let jsonObj = {
       name : name,
       email : email,
       password : password,
     }
     let jsonstring = JSON.stringify(jsonObj);
     this.http.post(this.dataService.apiEndpoint + "/user",jsonstring,
     {observe: 'response'}).subscribe((response) =>{
       console.log(JSON.stringify(response.status));
       console.log(JSON.stringify(response.body));
       this.dialogref.close();
     });
   }
  }
   close(){
    this.dialogref.close();
   }
}

